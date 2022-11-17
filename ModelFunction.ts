type Presentation = {
    slides : Slides,
    highlighting: Highlighting,
    name: string,
}

type Highlighting = {
    slides: Array<string>,
    objects: Array<string>,
}

type Slides = Array<Slide>

// слайд
type Slide = {
    id: string,
    objectsOnSlides: Objects,
    background: Background
}

// объект на слайде
type ObjectOnSlides = Picture | Shape | Text;

// объекты на слайде
type Objects = Array<ObjectOnSlides>

type Background = Color | Picture // функции будут такие же как на картинки и цвета

// список цветов - Палитра
type Color = {
    nameColor: string,
}

// свойства : ширина, высота, координаты
type Features = {
    width: number,
    height: number,
    x: number,
    y: number,
    id: number,
}

// блок текста
type TextBlock = {
    text: string,
    features: Features,
    font: Font,
    textAlign: TextAlign,
}

type TextAlign = 'center' | 'left'| 'right'

// шрифт
type Font = {
    nameFont: string,
    sizeFont: number,
    colorFont: Color,
}

// картинка
type Picture = {
    src: string,
    features: Features,
    fill: Color,
    stroke: Color,
}

// фигура: квадрат, круг, эллипс, треугольник
type Shape = {
    typeShapes: Square| Triangle| Circle,
    features: Features,
    design: Design,
}

type Circle = {
    radius: number,
    feature: Features,
    design: Design,
}

type Square = {
    feature: Features,
    design: Design,
}

type Triangle = {
    feature: Features,
    design: Design,
}

// дизайн элементов
type Design = {
    colorBackground: Color,
    colorStroke: Color,
}


// создать слайд, добавление элемента на слйд, удаление объект
function createSlide(slide: Slide, presentation: Presentation): Presentation
{
    return 
}

function addObject(slide: Slide, object: TextBlock | Shape | Picture, presentation: Presentation): Presentation
{
    return
}

function deleteSlides(slide: Slide, idSlide): Presentation
{
    return
}

// функции: создание свойств, задаем высоту, ширину, координаты
function createFeatures(width: number, height: number, x: number, y: number ): Features
{
    return 
}

function setFeaturesX(features: Features, x: number): Features
{
    return
}

function setFeaturesY(features: Features, y: number): Features
{
    return
}

function setWidthFeatures(features: Features, width: number): Features
{
    return
}

function setHeightFeatures(features: Features, height: number): Features
{
    return
}

// функции: создать, поменять/вставить/написать текст, перемещение, изменение ширины, высоты, выравнивания, размера
function createTextBlock(features: Features, textAlign: TextAlign, font: Font): TextBlock
{
    return
}

function setTextInTextBlock(textBlock: TextBlock, text: string): TextBlock
{
    return
}

function setTextAlignTextBlock(textBlock: TextBlock, position: TextAlign): TextBlock  //ссылается на функцию, которая меняет положение
{
    return
}




function setTextBlockNameFont(textBlock: TextBlock, nameFont: string): TextBlock  // вызывает функцию, которая выбирает шрифт
{

}
function setTextBlockSizeFont(textBlock: TextBlock, sizeFont: number): TextBlock  // вызывает функцию, которая выбирает размер шрифта
{
    
}

function changeTextAlign(textAlign: TextAlign, position: TextAlign) : TextAlign{

}

// создание определенного стиля для текста: выбор шрифта, цвета, размера, начертание и тд
function createFont(nameFont: string, sizeFont: number): Font{

}

function setFontNameFont(font: Font, nameFont: string): Font{

}

function setFontSizeFont(font: Font, sizeFont: number): Font{

}

function setFontColorFont(font: Font, colorFont: Color): Font{

}

//до картинки, изменение положения по х, по у, изменение высоты, ширины
function movePictureX(picture: Picture, x: number):Picture{

}

function movePictureY(picture: Picture, y: number):Picture{

}

function changeWidthPicture(picture: Picture, width: number):Picture{

}

function changeHeightPicture(picture: Picture, height: number):Picture{

}

function createPicture(URL: string, features: Features):Picture{

}

// создать фигуру, перемещение фигуры, изменение фона, высоты, ширины, координат х, у
function createShape(typeShapes: string, features: Features, style: Design): Shape{

}

function moveShapeX(shape: Shape, x: number): Shape     // можно будет вынести изменение по х, у, ширины и высоты у объекта и в функцию передавать уже объект
{

}

function moveShapeY(shape: Shape, y: number): Shape{

}

function changeWidthShape(shape: Shape, width: number): Shape{

}

function changeHeightShape(shape: Shape, height: number): Shape{

}

function setShapeColorBackground(shape: Shape, color: Color): Shape  // будет вызывать функцию, которая меняет цвет фона - changeColorBackground
{

}

function setShapeColorStroke(shape: Shape, color: Color): Shape   // будет вызывать функцию, которая меняет цвет обводки - changeColorStroke
{

}

// создание дизайна, меняем цвет фона, обводки
function changeColorStroke(design: Design, color: Color): Design{

}

function createDesign(colorBackground: Color, colorStroke: Color): Design{

}

function changeColorBackground(design: Design, color: Color): Design{
    
}