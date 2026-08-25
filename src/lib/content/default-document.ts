import type { PortfolioDocument } from '#lib/server/db/schema.js';

function text(content: string, links: Array<{ id: string; label: string }> = []) {
	return {
		content,
		marks: links.map((link) => {
			const start_offset = content.indexOf(link.label);
			return { start_offset, end_offset: start_offset + link.label.length, node_id: link.id };
		}),
		annotations: []
	};
}

export const defaultDocument: PortfolioDocument = {
	document_id: 'home',
	nodes: {
		home: {
			id: 'home',
			type: 'page',
			body: {
				nodes: ['profile', 'whatido', 'work', 'social'],
				marks: [],
				annotations: []
			}
		},
		profile: {
			id: 'profile',
			type: 'profile',
			name: text('Thomas Mol'),
			intro: text('I am currently a Founding Engineer at pyannoteAI, based in Utrecht, the Netherlands.', [
				{ id: 'pyannoteintro', label: 'pyannoteAI' }
			]),
			image: '/thomas.webp'
		},
		whatido: {
			id: 'whatido',
			type: 'section',
			title: text('What I do'),
			body: text(
				'At pyannoteAI, I work on the platform for speaker diarization and conversation intelligence. I also founded Audiogest, a web app for transforming meetings and interviews into transcripts and summaries. Beyond speech, I like building AI-based tools and products, with a focus on performant applications and great UI/UX.',
				[
					{ id: 'pyannottewhatido', label: 'pyannoteAI' },
					{ id: 'audiogestwhatido', label: 'Audiogest' }
				]
			)
		},
		work: {
			id: 'work',
			type: 'work',
			title: text('Selected work'),
			items: {
				nodes: ['whisperwork', 'audiogestwork'],
				marks: [],
				annotations: []
			}
		},
		whisperwork: {
			id: 'whisperwork',
			type: 'work_item',
			content: text(
				'Whisper Diarization: A transcription and speaker diarization pipeline using Whisper and pyannote. 8.9M+ runs on Replicate.',
				[
					{ id: 'whisperlink', label: 'Whisper Diarization' },
					{ id: 'replicatelink', label: 'Replicate' }
				]
			)
		},
		audiogestwork: {
			id: 'audiogestwork',
			type: 'work_item',
			content: text(
				'Audiogest: A tool for transforming meetings and interviews into transcripts, summaries and other deliverables.',
				[{ id: 'audiogestworklink', label: 'Audiogest' }]
			)
		},
		social: {
			id: 'social',
			type: 'social',
			content: text('Find me on GitHub, LinkedIn, and X.', [
				{ id: 'githublink', label: 'GitHub' },
				{ id: 'linkedinlink', label: 'LinkedIn' },
				{ id: 'xlink', label: 'X' }
			])
		},
		pyannoteintro: { id: 'pyannoteintro', type: 'link', href: 'https://www.pyannote.ai/', target: '_blank' },
		pyannottewhatido: { id: 'pyannottewhatido', type: 'link', href: 'https://www.pyannote.ai/', target: '_blank' },
		audiogestwhatido: { id: 'audiogestwhatido', type: 'link', href: 'https://audiogest.app/', target: '_blank' },
		whisperlink: { id: 'whisperlink', type: 'link', href: 'https://github.com/thomasmol/cog-whisper-diarization', target: '_blank' },
		replicatelink: { id: 'replicatelink', type: 'link', href: 'https://replicate.com/thomasmol/whisper-diarization', target: '_blank' },
		audiogestworklink: { id: 'audiogestworklink', type: 'link', href: 'https://audiogest.app/', target: '_blank' },
		githublink: { id: 'githublink', type: 'link', href: 'https://github.com/thomasmol', target: '_blank' },
		linkedinlink: { id: 'linkedinlink', type: 'link', href: 'https://www.linkedin.com/in/thomas-mol', target: '_blank' },
		xlink: { id: 'xlink', type: 'link', href: 'https://x.com/thomas_mol', target: '_blank' }
	}
};
