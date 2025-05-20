import { useState } from "react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme-toggle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";

interface ComponentExampleProps {
	title: string;
	description: string;
	children: React.ReactNode;
	code: string;
}

function ComponentExample({ title, description, children, code }: ComponentExampleProps) {
	const [showCode, setShowCode] = useState(false);

	return (
		<div className="space-y-fluid-2" id={title.toLowerCase().replace(/\s+/g, "-")}>
			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-fluid-xl font-semibold">{title}</h3>
					<p className="text-fluid-sm text-muted-foreground">{description}</p>
				</div>
				<Button variant="outline" size="sm" onClick={() => setShowCode(!showCode)}>
					{showCode ? "Hide Code" : "Show Code"}
				</Button>
			</div>
			<div className="rounded-lg border bg-card p-fluid-4">{children}</div>
			{showCode && (
				<pre className="relative rounded-lg border bg-muted p-fluid-4">
					<Button
						variant="ghost"
						size="sm"
						className="absolute right-2 top-2"
						onClick={() => navigator.clipboard.writeText(code)}
					>
						Copy
					</Button>
					<code className="text-fluid-sm">{code}</code>
				</pre>
			)}
		</div>
	);
}

interface NavItem {
	title: string;
	href: string;
}

const navigation: NavItem[] = [
	{ title: "Button Playground", href: "#button-playground" },
	{ title: "Card Playground", href: "#card-playground" },
];

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";
type CardVariant = "default" | "clickable" | "disabled";

export default function Components() {
	const [buttonProps, setButtonProps] = useState({
		variant: "default" as ButtonVariant,
		size: "default" as ButtonSize,
		disabled: false,
		loading: false,
		text: "Button",
	});

	const [cardProps, setCardProps] = useState({
		variant: "default" as CardVariant,
		title: "Card Title",
		description: "Card Description",
		content: "This is the card content. You can customize it here.",
		showFooter: true,
		footerButtonText: "View Details",
		footerButtonVariant: "outline" as ButtonVariant,
		footerButtonSize: "sm" as ButtonSize,
	});

	const generateButtonCode = () => {
		const props = [];
		if (buttonProps.variant !== "default") props.push(`variant="${buttonProps.variant}"`);
		if (buttonProps.size !== "default") props.push(`size="${buttonProps.size}"`);
		if (buttonProps.disabled) props.push("disabled");
		if (buttonProps.loading) props.push("loading");
		
		return `<Button${props.length ? " " + props.join(" ") : ""}>${buttonProps.text}</Button>`;
	};

	const generateCardCode = () => {
		const cardProps = [];
		if (cardProps.variant !== "default") cardProps.push(`variant="${cardProps.variant}"`);
		if (cardProps.variant === "clickable") cardProps.push(`onClick={() => alert('Card clicked!')}`);

		const footerButtonProps = [];
		if (cardProps.footerButtonVariant !== "default") footerButtonProps.push(`variant="${cardProps.footerButtonVariant}"`);
		if (cardProps.footerButtonSize !== "default") footerButtonProps.push(`size="${cardProps.footerButtonSize}"`);
		if (cardProps.variant === "disabled") footerButtonProps.push("disabled");

		return `<Card${cardProps.length ? " " + cardProps.join(" ") : ""}>
  <CardHeader>
    <CardTitle>${cardProps.title}</CardTitle>
    <CardDescription>${cardProps.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>${cardProps.content}</p>
  </CardContent>
  ${cardProps.showFooter ? `<CardFooter>
    <Button${footerButtonProps.length ? " " + footerButtonProps.join(" ") : ""}>${cardProps.footerButtonText}</Button>
  </CardFooter>` : ""}
</Card>`;
	};

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto flex">
				{/* Sidebar */}
				<div className="w-64 border-r min-h-screen p-fluid-4">
					<div className="sticky top-4 space-y-fluid-6">
						<div className="flex items-center justify-between">
							<h2 className="text-fluid-lg font-semibold">Components</h2>
							<ThemeToggle />
						</div>
						<nav className="space-y-fluid-4">
							<ul className="space-y-fluid-1">
								{navigation.map((item) => (
									<li key={item.href}>
										<a
											href={item.href}
											className="text-fluid-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											{item.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex-1 p-fluid-4">
					<div className="max-w-3xl mx-auto space-y-fluid-8">
						{/* Button Playground */}
						<section className="space-y-fluid-4">
							<h2 className="text-fluid-2xl font-semibold">Buttons</h2>
							
							<ComponentExample
								title="Button Playground"
								description="Customize the button properties and see the changes in real-time"
								code={generateButtonCode()}
							>
								<div className="space-y-fluid-4">
									<div className="grid grid-cols-2 gap-fluid-4">
										<div className="space-y-fluid-2">
											<label htmlFor="variant-select" className="text-fluid-sm font-medium">Variant</label>
											<select
												id="variant-select"
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
												value={buttonProps.variant}
												onChange={(e) => setButtonProps({ ...buttonProps, variant: e.target.value as ButtonVariant })}
												aria-label="Select button variant"
											>
												<option value="default">Default</option>
												<option value="destructive">Destructive</option>
												<option value="outline">Outline</option>
												<option value="secondary">Secondary</option>
												<option value="ghost">Ghost</option>
												<option value="link">Link</option>
											</select>
										</div>
										<div className="space-y-fluid-2">
											<label htmlFor="size-select" className="text-fluid-sm font-medium">Size</label>
											<select
												id="size-select"
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
												value={buttonProps.size}
												onChange={(e) => setButtonProps({ ...buttonProps, size: e.target.value as ButtonSize })}
												aria-label="Select button size"
											>
												<option value="default">Default</option>
												<option value="sm">Small</option>
												<option value="lg">Large</option>
												<option value="icon">Icon</option>
											</select>
										</div>
									</div>

									<div className="space-y-fluid-2">
										<label htmlFor="button-text" className="text-fluid-sm font-medium">Button Text</label>
										<input
											id="button-text"
											type="text"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
											value={buttonProps.text}
											onChange={(e) => setButtonProps({ ...buttonProps, text: e.target.value })}
											placeholder="Enter button text"
											aria-label="Button text input"
										/>
									</div>

									<div className="flex gap-fluid-4">
										<label className="flex items-center gap-2">
											<input
												type="checkbox"
												checked={buttonProps.disabled}
												onChange={(e) => setButtonProps({ ...buttonProps, disabled: e.target.checked })}
												className="rounded border-input"
											/>
											<span className="text-fluid-sm">Disabled</span>
										</label>
										<label className="flex items-center gap-2">
											<input
												type="checkbox"
												checked={buttonProps.loading}
												onChange={(e) => setButtonProps({ ...buttonProps, loading: e.target.checked })}
												className="rounded border-input"
											/>
											<span className="text-fluid-sm">Loading</span>
										</label>
									</div>

									<div className="pt-fluid-4">
										<Button
											variant={buttonProps.variant}
											size={buttonProps.size}
											disabled={buttonProps.disabled}
											loading={buttonProps.loading}
										>
											{buttonProps.text}
										</Button>
									</div>
								</div>
							</ComponentExample>
						</section>

						{/* Card Playground */}
						<section className="space-y-fluid-4">
							<h2 className="text-fluid-2xl font-semibold">Cards</h2>

							<ComponentExample
								title="Card Playground"
								description="Customize the card properties and see the changes in real-time"
								code={generateCardCode()}
							>
								<div className="space-y-fluid-4">
									<div className="grid grid-cols-2 gap-fluid-4">
										<div className="space-y-fluid-2">
											<label htmlFor="card-variant" className="text-fluid-sm font-medium">Variant</label>
											<select
												id="card-variant"
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
												value={cardProps.variant}
												onChange={(e) => setCardProps({ ...cardProps, variant: e.target.value as CardVariant })}
												aria-label="Select card variant"
											>
												<option value="default">Default</option>
												<option value="clickable">Clickable</option>
												<option value="disabled">Disabled</option>
											</select>
										</div>
										<div className="space-y-fluid-2">
											<label className="flex items-center gap-2">
												<input
													type="checkbox"
													checked={cardProps.showFooter}
													onChange={(e) => setCardProps({ ...cardProps, showFooter: e.target.checked })}
													className="rounded border-input"
												/>
												<span className="text-fluid-sm">Show Footer</span>
											</label>
										</div>
									</div>

									<div className="space-y-fluid-2">
										<label htmlFor="card-title" className="text-fluid-sm font-medium">Title</label>
										<input
											id="card-title"
											type="text"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
											value={cardProps.title}
											onChange={(e) => setCardProps({ ...cardProps, title: e.target.value })}
											placeholder="Enter card title"
											aria-label="Card title input"
										/>
									</div>

									<div className="space-y-fluid-2">
										<label htmlFor="card-description" className="text-fluid-sm font-medium">Description</label>
										<input
											id="card-description"
											type="text"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
											value={cardProps.description}
											onChange={(e) => setCardProps({ ...cardProps, description: e.target.value })}
											placeholder="Enter card description"
											aria-label="Card description input"
										/>
									</div>

									<div className="space-y-fluid-2">
										<label htmlFor="card-content" className="text-fluid-sm font-medium">Content</label>
										<textarea
											id="card-content"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
											value={cardProps.content}
											onChange={(e) => setCardProps({ ...cardProps, content: e.target.value })}
											placeholder="Enter card content"
											aria-label="Card content input"
											rows={3}
										/>
									</div>

									{cardProps.showFooter && (
										<div className="grid grid-cols-2 gap-fluid-4">
											<div className="space-y-fluid-2">
												<label htmlFor="footer-button-text" className="text-fluid-sm font-medium">Button Text</label>
												<input
													id="footer-button-text"
													type="text"
													className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
													value={cardProps.footerButtonText}
													onChange={(e) => setCardProps({ ...cardProps, footerButtonText: e.target.value })}
													placeholder="Enter button text"
													aria-label="Footer button text input"
												/>
											</div>
											<div className="space-y-fluid-2">
												<label htmlFor="footer-button-variant" className="text-fluid-sm font-medium">Button Variant</label>
												<select
													id="footer-button-variant"
													className="w-full rounded-md border border-input bg-background px-3 py-2 text-fluid-sm"
													value={cardProps.footerButtonVariant}
													onChange={(e) => setCardProps({ ...cardProps, footerButtonVariant: e.target.value as ButtonVariant })}
													aria-label="Select footer button variant"
												>
													<option value="default">Default</option>
													<option value="destructive">Destructive</option>
													<option value="outline">Outline</option>
													<option value="secondary">Secondary</option>
													<option value="ghost">Ghost</option>
													<option value="link">Link</option>
												</select>
											</div>
										</div>
									)}

									<div className="pt-fluid-4">
										<Card
											variant={cardProps.variant}
											onClick={cardProps.variant === "clickable" ? () => alert("Card clicked!") : undefined}
										>
											<CardHeader>
												<CardTitle>{cardProps.title}</CardTitle>
												<CardDescription>{cardProps.description}</CardDescription>
											</CardHeader>
											<CardContent>
												<p>{cardProps.content}</p>
											</CardContent>
											{cardProps.showFooter && (
												<CardFooter>
													<Button
														variant={cardProps.footerButtonVariant}
														size={cardProps.footerButtonSize}
														disabled={cardProps.variant === "disabled"}
													>
														{cardProps.footerButtonText}
													</Button>
												</CardFooter>
											)}
										</Card>
									</div>
								</div>
							</ComponentExample>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
