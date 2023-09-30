import { Probot } from "probot";

const PATTERN: RegExp = /(?<![^\s])!([a-zA-Z]*)(?: ([a-zA-Z0-9]+))?/m;

export = (app: Probot) => {
    app.on('issue_comment.created', async (context) => {
        
        if (context.isBot) {
            return;
        }

        // Scan for commands.
        

    })
};
