"use strict";

class Controller {
	constructor() {
		document.querySelector("#yearLabel").innerHTML = new Date().getFullYear();
		this.views = Array.from(document.querySelectorAll(".view"));
		this.viewButtons = Array.from(document.querySelectorAll(".viewButton"));
		this.changeView("home");

		for (let viewButton of this.viewButtons) {
			viewButton.addEventListener("click", () => {
				this.changeView(viewButton.id);
			});
		}
	}

	changeView(viewId) {
		this.currentView = viewId;

		for (let view of this.views) {
			view.style.display = "none";
		}

		document.querySelector(`#${viewId}.view`).style.display = "block";
	}
}

new Controller();
