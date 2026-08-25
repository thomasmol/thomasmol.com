import {
	AddNewLineCommand,
	RedoCommand,
	SelectAllCommand,
	UndoCommand,
	define_keymap,
	type SessionConfig,
	type SveditContext
} from 'svedit';
import LinkMark from './LinkMark.svelte';
import PageNode from './PageNode.svelte';
import ProfileNode from './ProfileNode.svelte';
import SectionNode from './SectionNode.svelte';
import SocialNode from './SocialNode.svelte';
import WorkItemNode from './WorkItemNode.svelte';
import WorkNode from './WorkNode.svelte';
import type { PortfolioSchema } from './schema.js';

export const portfolioConfig: SessionConfig = {
	generate_id: () => `node_${crypto.randomUUID()}`,
	view_classes: false,
	node_components: {
		page: PageNode,
		profile: ProfileNode,
		section: SectionNode,
		work: WorkNode,
		work_item: WorkItemNode,
		social: SocialNode,
		link: LinkMark
	},
	create_commands_and_keymap: (context: SveditContext<PortfolioSchema>) => {
		const commands = {
			undo: new UndoCommand(context),
			redo: new RedoCommand(context),
			addNewLine: new AddNewLineCommand(context),
			selectAll: new SelectAllCommand(context)
		};

		return {
			commands,
			keymap: define_keymap({
				'meta+z,ctrl+z': [commands.undo],
				'meta+shift+z,ctrl+shift+z': [commands.redo],
				'meta+a,ctrl+a': [commands.selectAll],
				'shift+enter': [commands.addNewLine]
			})
		};
	}
};
