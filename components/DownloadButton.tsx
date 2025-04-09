import React, { ReactNode } from "react";

interface DownloadButtonProps {
	href: string;
	icon: ReactNode;
	label: string;
	sublabel: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ href, icon, label, sublabel }) => {
	return (
		<a
			href={href}
			className="group border-primary hover:bg-primary hover:text-primary-foreground flex items-center rounded-full border px-6 py-3 transition-all"
		>
			<div className="text-primary group-hover:text-primary-foreground mr-3 transition-colors">{icon}</div>
			<div>
				<div className="text-xs">{sublabel}</div>
				<div className="font-medium">{label}</div>
			</div>
		</a>
	);
};
