import * as wasm from "erg-playground";

var playground = wasm.Playground.new();

const ascii_art = `

█▀▀ █▀█ █▀▀   █▀█ █   ▄▀█ █▄█ █▀▀ █▀█ █▀█ █ █ █▄ █ █▀▄
██▄ █▀▄ █▄█   █▀▀ █▄▄ █▀█  █  █▄█ █▀▄ █▄█ █▄█ █ ▀█ █▄▀

`;
const settings = {
    prompt: ">>> ",
    greetings: ascii_art + playground.start_message() + "\n",
};
const action = function(command, term) {
    let result = playground.eval(command);
    if (result.startsWith("<<ErgPlayGroundError>>")) {
        result = result.replace("<<ErgPlayGroundError>>", "");
        // TODO: multiline error messages
        result = result.replace("1 | ", `1 | ${command}`);
        term.echo(result);
    } else {
        term.echo(result);
    }
};
$('body').terminal(action, settings);
