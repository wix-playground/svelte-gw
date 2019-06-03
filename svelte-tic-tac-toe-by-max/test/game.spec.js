const {
  render,
  cleanup,
  fireEvent,
  waitForElement
} = require("svelte-testing-library");
const Game = require("../src/App.svelte");

beforeEach(cleanup);

describe("Tic Tac Toe Game", () => {
  test("should show first player as 'X'", () => {
    const { getByText } = render(Game);
    expect(getByText("Next player: X"));
  });

  test("Should render 9 squares", async () => {
    const { container } = render(Game);
    const squares = container.querySelectorAll(".square");
    expect(squares.length).toEqual(9);
  });

  test("should switch player to 'O' after the turn", async () => {
    const { container, getByText } = render(Game);
    const square = container.querySelector(".square");
    fireEvent.click(square);
    const nextPlayer = await waitForElement(() => getByText("Next player: O"));
    expect(nextPlayer);
  });
});
