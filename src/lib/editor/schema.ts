import { define_document_schema, type PropertyDefinition } from 'svedit';

const linkedText = {
	type: 'text',
	mark_types: ['link'],
	allow_newlines: true
} satisfies PropertyDefinition;

const linkedTitle = {
	type: 'text',
	mark_types: ['link'],
	allow_newlines: false
} satisfies PropertyDefinition;

export const portfolioSchema = define_document_schema({
	page: {
		kind: 'document',
		properties: {
			body: {
				type: 'node_array',
				node_types: ['profile', 'section', 'work', 'social']
			}
		}
	},
	profile: {
		kind: 'block',
		properties: {
			name: linkedTitle,
			intro: linkedText,
			image: { type: 'string' }
		}
	},
	section: {
		kind: 'block',
		properties: {
			title: linkedTitle,
			body: linkedText
		}
	},
	work: {
		kind: 'block',
		properties: {
			title: linkedTitle,
			items: {
				type: 'node_array',
				node_types: ['work_item'],
				default_node_type: 'work_item'
			}
		}
	},
	work_item: {
		kind: 'text',
		properties: {
			content: linkedText
		}
	},
	social: {
		kind: 'block',
		properties: {
			content: linkedText
		}
	},
	link: {
		kind: 'mark',
		properties: {
			href: { type: 'string' },
			target: { type: 'string' }
		}
	}
});

export type PortfolioSchema = typeof portfolioSchema;
