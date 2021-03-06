window.addEventListener("load", function(event) {
    var bar = document.querySelector("section.paste-submit");

    if(!bar) {
        return false;
    }

    var removes = document.querySelectorAll("a.remove");

    for(var i = 0; i < removes.length; i++) {
        var remove = removes[i];

        remove.addEventListener("click", function(event) {
            event.preventDefault();

            var section = event.target.parentNode.parentNode;

            document.querySelector("main.page-create").removeChild(section);
        });
    };

    var but = document.createElement("a");

    but.text = "Add another file.";
    but.href = "#";

    but.addEventListener("click", function(event) {
        event.preventDefault();

        new_file_add();
    })

    bar.appendChild(but);
});

function new_file_add() {
    var template = document.querySelector("section.file-template").cloneNode(true);
    template.className = "file-part file-extra";
    template.querySelector("a.remove").addEventListener("click", function(event) {
        event.preventDefault();

        var section = event.target.parentNode.parentNode;

        document.querySelector("main.page-create").removeChild(section);
    });

    document.querySelector("main.page-create").insertBefore(
        template,
        document.querySelector("section.paste-submit")
    );
}
