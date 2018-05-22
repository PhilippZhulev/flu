class Todo extends flu.component {

    view () {
        return [
            "h1>TODO List",
            "ul.todo_wrap(wrap)",
            "input[type=text](in)"
        ]
    }

    supply() {
        return [
            "li.todo_item(item)"
        ]
    }

    controller() {
        const reg = flu.reg(this);
        let i = 0;

        reg.onEvent.change({
            target: "in",
            run: function () {
                let val = this.value("in"),
                     el = this.append("wrap", "item").supplement("item_" + i);

                el.inner(val.get());
                val.set("");
                i++;

                console.log(this.fluSupply);
            }
        });
    }

}

flu.class(Todo).render(".app");