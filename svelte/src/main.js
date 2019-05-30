import Game from './Game.svelte';

const game = new Game({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default game;