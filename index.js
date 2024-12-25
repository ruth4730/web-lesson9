HtmlElement.count = 1;
function HtmlElement(type, textContent) {
    this.type = type
    this.textContent = textContent
    this.id = HtmlElement.count++
}
HtmlElement.prototype.render = function () {
    let e = document.createElement(this.type)
    e.setAttribute("id", "elem" + this.id)
    e.innerText = this.textContent
    document.body.appendChild(e)
}
function ImageElement(src, alt) {
    HtmlElement.call(this, "img", '')
    this.src = src
    this.alt = alt
}
ImageElement.prototype = Object.create(HtmlElement.prototype)
ImageElement.prototype.constructor = ImageElement
ImageElement.prototype.render = function () {
    HtmlElement.prototype.render.call(this)
    let e = document.getElementById("elem" + this.id)
    e.setAttribute("src", this.src)
    e.setAttribute("alt", this.alt)
}
function SelectElement(options) {
    HtmlElement.call(this, "select", "")
    this.options = options
}
SelectElement.prototype = Object.create(HtmlElement.prototype)
SelectElement.prototype.constructor = SelectElement
SelectElement.prototype.render = function () {
    HtmlElement.prototype.render.call(this)
    let e = document.getElementById("elem" + this.id)
    this.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.textContent = option;
        e.appendChild(optionElement);
    });
}
function createMyElement() {
    let type = document.getElementById('t1').value
    let textContent = document.getElementById('t2').value
    let e = new HtmlElement(type, textContent)
    e.render()
}
function createImg() {
    let src=document.getElementById('t3').value
    let alt=document.getElementById('t4').value
    let e=new ImageElement(src,alt)
    e.render()
}
function createSelect() {
    let arr=document.getElementById('t5').value.split(',')
    let e=new SelectElement(arr)
    e.render()
}