// eslint-disable react/display-name
import Paper, { StoryComponent } from ".";
import { StoryComponent as Title } from "../title";
import { component, withHeaderAndContent } from "./docs";

export default {
	title: "1) Elements/Paper",
	component: StoryComponent,
	argTypes: {
		children: { control: "text" },
		as: { options: [ "div", "main", "section" ] },
	},
	parameters: {
		backgrounds: {
			"default": "medium",
		},
		docs: {
			description: { component },
		},
	},
};

export const Factory = ( args ) => <StoryComponent { ...args } />;
Factory.parameters = {
	controls: { disable: false },
};
Factory.args = {
	children: "Paper factory",
	className: "yst-p-6",
};

export const WithHeaderAndContent = {
	component: Factory.bind( {} ),
	parameters: {
		docs: {
			description: {
				story: withHeaderAndContent,
			},
		},
	},
	args: {
		children: (
			<>
				<Paper.Header>
					<Title>Title</Title>
					<span>Description</span>
				</Paper.Header>
				<Paper.Content>
					<span>Content</span>
				</Paper.Content>
			</>
		),
	},
};
