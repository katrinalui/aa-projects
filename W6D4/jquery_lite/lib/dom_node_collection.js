class DOMNodeCollection {
  constructor (array) {
    this.array = array;
  }

  html(string) {
    if (string) {
      this.array.forEach(el => {
        el.innerHTML = string;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.array.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(arg) {
    if (typeof arg === "string") {
      this.array.forEach(el => {
        el.innerHTML += arg;
      });
    } else {
      arg.forEach(el => {
        this.array.forEach(node => {
          node.innerHTML += el;
        });
      });
    }
  }

  attr(attrName, value) {
    if (value) {
      this.array.forEach(el => {
        el.setAttribute(attrName, value);
      });
    } else {
      return this.array[0].getAttribute(attrName);
    }
  }

  addClass(string) {
    this.array.forEach(el => {
      if (el.className.length > 0) {
        el.className += " ";
      }
      el.className += string;
    });
  }

  removeClass(className) {
    if (className) {
      const classesToRemove = className.split(" ");
      this.array.forEach(el => {
        const replacement = [];
        const currentClasses = el.className.split(" ");
        currentClasses.forEach(name => {
          if (!classesToRemove.includes(name)) { replacement.push(name); }
        });
        el.className = replacement.join(" ");
      });
    } else {
      this.array.forEach(el => {
        el.className = "";
      });
    }
  }

  children() {
    let childNodes = [];

    this.array.forEach(el => {
      const htmlChildren = el.children;
      const array = Array.from(htmlChildren);
      childNodes = childNodes.concat(array);
    });

    return new DOMNodeCollection(childNodes);
  }

  parent() {
    let parentNodes = [];
    this.array.forEach(el => {
      const htmlParent = el.parentNode;
      parentNodes.push(htmlParent);
    });

    return new DOMNodeCollection(parentNodes);
  }

  find(selector) {
    let findings = [];

    this.array.forEach(el => {
      findings = findings.concat(el.querySelectorAll(selector));
    });

    return new DOMNodeCollection(findings);
  }

  remove() {
    this.array.forEach(el => {
      el.remove();
    });

    this.array = [];
  }

  on(type, callback) {
    this.array.forEach(el => {
      el.addEventListener(type, callback);
    });
    this.attr("listener-callback", callback);
  }
}

module.exports = DOMNodeCollection;
