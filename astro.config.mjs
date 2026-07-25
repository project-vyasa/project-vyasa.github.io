// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://project-vyasa.github.io',
	integrations: [
		starlight({
			title: 'Project Vyasa',
			favicon: '/favicon.png',
			pagination: false,
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/project-vyasa' }],
		}),
	],
});
