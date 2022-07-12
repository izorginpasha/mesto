export class Section{
    constructor ({items, renderer}, containerSelector){// передаем массив для перебора и функцию отрисовки, селектор контеинера для вставки
        this._initialArray =items;
        this._renderer = renderer;
        this._conteiner = document.querySelector(containerSelector);
    }

    renderItems(){//переберает массив вызывает для каждого елемента метод addItem
        this._initialArray.forEach(item => {
            this.addItem(this._renderer(item));//передает отрисованныи элемент в addItem    
        });
    }
    addItem(element){//принимает елемент массива и вставляет его в контеинер
        this._conteiner.append(element);
    }
}