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
    playground.set_stdout((data) => term.echo(data));
    let result = playground.eval(command);
    if (result.startsWith("<<CompileError>>")) {
        result = result.replace("<<CompileError>>", "");
        // TODO: multiline error messages
        result = result.replace("1 | ", `1 | ${command}`);
        term.echo(result);
    } else if (result.startsWith("<<RuntimeError>>")) {
        result = result.replace("<<RuntimeError>>", "").split("\n");
        let code = result[0];
        result = result.slice(1).join("\n");
        term.error(`invalid code:\n${code}`);
        term.error(result);
    } else if (result.length > 0) {
        term.echo(result);
    }
};
$('body').terminal(action, settings);
