type Presentation = {
    slides : Slides,
    highlighting: Highlighting,
    name: string,
}

type Highlighting = {
    slides: Array<string>,
    objects: Array<string>,
}

type Slides =  Array<Slide>

// слайд
type Slide = {
    id: string,
    objectsOnSlides: Objects| null,
    background: Background
}

// объект на слайде
type ObjectOnSlides = Picture | Shape['typeSh'] | TextBlock;

// объекты на слайде
type Objects = Array<ObjectOnSlides>

type Background = String | Picture // функции будут такие же как на картинки и цвета

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
    type: 'TextBlock',
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
    colorFont: string,
}

// картинка
type Picture = {
    src: string,
    features: Features,
    fill: string,
    stroke: string,
    type: 'Picture'
}

// фигура: квадрат, круг, эллипс, треугольник
type Shape = {
    typeSh: Circle | Square | Triangle,

    features: Features,
    design: Design,
    type: 'Shape'
}

type Circle = {
    radius: number,
    feature: Features,
    design: Design,
    type: 'Circle',
}

type Square = {
    feature: Features,
    design: Design,
    type: 'Square'
}

type Triangle = {
    feature: Features,
    design: Design,
    type: 'Triangle'
}

// дизайн элементов
type Design = {
    colorBackground: string,
    colorStroke: string,
}

function createId(): string{
    return '' + Math.random()
}

// создать слайд, добавление элемента на слйд, удаление объект
function createSlide(slides: Slides, slide: Slide): Slides{
    return [
        ...slides,
        slide = {
            id: createId(),
            objectsOnSlides: null,
            background: ''
        }
    ]
}

function createPresentation(slide: Slides, highlighting: Highlighting): Presentation{
    return {
        slides : slide,
        highlighting: highlighting,
        name: '',
    }
}

function createNamePresentation(presentation: Presentation, name: string):Presentation{
    return {
        ...presentation,
        name: name,
    }
}

function createTextBlockObject(features: Features, textAlign: TextAlign, font: Font, objectO: Objects): Objects{
    return [
        ...objectO,
        createTextBlock(features, textAlign, font)
    ]
}

function createShapeObject(features: Features, objectO: Objects, style: Design, radius: number, typeSh: Circle | Square | Triangle): Objects{
    return [
        ...objectO,
        createShape(features, style, radius, typeSh)
    ]
}

function createPictureObject(URL: string, features: Features, objectO: Objects): Objects{
    return [
        ...objectO,
        createPicture(URL, features)
    ]
}

function selectObject(object: TextBlock | Shape | Picture, features: Features, textAlign: TextAlign, font: Font, URL: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects): Objects{
    if (object.type == 'TextBlock' ){
        return createTextBlockObject(features, textAlign, font, objectO)
    } 
    else{
        if (object.type == 'Shape'){
            return createShapeObject(features, objectO, style, radius, typeSh)
        }
        else{
            return createPictureObject(URL, features, objectO)
        }
    }
}

function addObjectOnSlide(object: TextBlock | Shape | Picture, slide: Slide, features: Features, textAlign: TextAlign, font: Font, URL: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects): Slide{
    return {
         ...slide,
        objectsOnSlides: selectObject(object, features, textAlign, font, URL, style, radius, typeSh, objectO),
        }
}

function createSlides(object: TextBlock | Shape | Picture, slides: Slides, slide: Slide, features: Features, textAlign: TextAlign, font: Font, URL: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects): Slides{
    return [
        ...slides,
        addObjectOnSlide(object, slide, features, textAlign, font, URL, style, radius, typeSh, objectO)
    ]
}

function addObjectInPresentation(object: TextBlock | Shape | Picture, slides: Slides, slide: Slide, features: Features, textAlign: TextAlign, font: Font, URL: string, style: Design, radius: number, typeSh: Circle | Square | Triangle, objectO: Objects, presentation: Presentation): Presentation
{
    return {
        ...presentation,
        slides: createSlides(object, slides, slide, features, textAlign, font, URL, style, radius, typeSh, objectO)
    }
}

function deleteSlides(presentation: Presentation, ids: string[]): Presentation 
{
    return {
        ...presentation,
        slides: presentation.slides.filter((slide) => {
            if (slide.id == ids[ids.length]){
                ids.splice(ids.length, 1)
            }
        })
    }
}

// функции: создание свойств, задаем высоту, ширину, координаты
function createFeatures(width: number, height: number, x: number, y: number): Features
{
    return {
        width: width,
        height: height,
        x: x,
        y: y,
        id: 1,
    }
}

function setFeaturesX(features: Features, x: number): Features
{
    return {
        ...features,
        x: x,
    }
}

function setFeaturesY(features: Features, y: number): Features
{
    return {
        ...features,
        y: y,
    }
}

function setWidthFeatures(features: Features, width: number): Features
{
    return {
        ...features,
        width: width,
    }
}

function setHeightFeatures(features: Features, height: number): Features
{
    return {
        ...features,
        height: height,
    }
}

// функции: создать, поменять/вставить/написать текст, перемещение, изменение ширины, высоты, выравнивания, размера
function createTextBlock(features: Features, textAlign: TextAlign, font: Font): TextBlock{
    return {
        type: "TextBlock",
        text: '',
        features: features,
        font: font,
        textAlign: textAlign,
    }
}

function setTextInTextBlock(textBlock: TextBlock, text: string): TextBlock
{
    return {
        ...textBlock,
        text: text,
    }
}

function setTextAlignTextBlock(textBlock: TextBlock, position: TextAlign): TextBlock  //ссылается на функцию, которая меняет положение
{
    return {
        ...textBlock,
        textAlign: position,
    }
}

function setTextBlockNameFont(textBlock: TextBlock, nameFont: string): TextBlock  // вызывает функцию, которая выбирает шрифт
{
    return {
        ...textBlock,
        font: setNameFont(nameFont, textBlock["font"]),
    }
}

function setNameFont(nameFont: string, font: Font): Font{
    return {
        ...font,
        nameFont: nameFont,
    }
}

function setTextBlockSizeFont(textBlock: TextBlock, sizeFont: number): TextBlock  // вызывает функцию, которая выбирает размер шрифта
{
    return {
        ...textBlock,
        font: setSizeFont(sizeFont, textBlock.font),
    }
}

function setSizeFont(sizeFont: number, font: Font): Font{
    return {
        ...font,
        sizeFont: sizeFont,
    }
}

function setTextBlockTextAlign(textBlock: TextBlock, position: TextAlign): TextBlock{
    return {
        ...textBlock,
        textAlign: position,
    }
}

// создание определенного стиля для текста: выбор шрифта, цвета, размера, начертание и тд
function createFont(nameFont: string, sizeFont: number): Font{
    return {
        nameFont: nameFont,
        sizeFont: sizeFont,
        colorFont: 'black',
    }
}


function setFontColorFont(font: Font, colorFont: string): Font{
    return {
        ...font,
        colorFont: colorFont,
    }
}

//до картинки, изменение положения по х, по у, изменение высоты, ширины
function createPicture(URL: string, features: Features): Picture{
    return {
        src: URL,
        features: features,
        fill: '',
        stroke: '',
        type: 'Picture'
    }
}



function movePictureX(picture: Picture, x: number, features: Features):Picture{
    return {
        ...picture,
        features: setFeaturesX(features, x),
    }
}

function movePictureY(picture: Picture, y: number, features: Features):Picture{ 
    return {
        ...picture,
        features: setFeaturesY(features, y),
    }
}

function changeWidthPicture(picture: Picture, width: number, features: Features):Picture{
    return {
        ...picture,
        features: setWidthFeatures(features, width),
    }
}

function changeHeightPicture(picture: Picture, height: number, features: Features):Picture{
    createFeatures(features.width, height, features.x, features.y)
    return {
        ...picture,
        features: features,
    }
}

// создать фигуру, перемещение фигуры, изменение фона, высоты, ширины, координат х, у
function createShape(features: Features, style: Design, radius: number, typeSh: Circle | Square | Triangle): Shape["typeSh"]{
    const shape = {
        typeSh: typeSh,
        features: features,
        design: style,
        type: 'Shape'
    }
    if (shape.typeSh.type == 'Circle'){
        return createCircle(features, style, radius)
    }else{
        if (shape.typeSh.type == 'Square'){
            return createSquare(features, style)
        }else{
            return createTriangle(features, style)
        }
    }
}

function createCircle(features: Features, style: Design, radius: number): Circle{
    return {
        radius: radius,
        feature: features,
        design: style,
        type: 'Circle',
    }
}

function createSquare(features: Features, style: Design): Square{
    return {
        feature: features,
        design: style,
        type: 'Square',
    }
}

function createTriangle(features: Features, style: Design): Triangle{
    return {
        feature: features,
        design: style,
        type: 'Triangle',
    }
}

function moveShapeX(shape: Shape, x: number, feature: Features): Shape{     // можно будет вынести изменение по х, у, ширины и высоты у объекта и в функцию передавать уже объект
    return {
        ...shape,
        features: setFeaturesX(feature, x)
    }
}

function moveShapeY(shape: Shape, y: number, feature: Features): Shape{
    return {
        ...shape,
        features: setFeaturesY(feature, y)
    }
}

function changeWidthShape(shape: Shape, width: number, feature: Features): Shape{
    return {
        ...shape,
        features: setWidthFeatures(feature, width)
    }
}

function changeHeightShape(shape: Shape, height: number, feature: Features): Shape{
    return {
        ...shape,
        features: setHeightFeatures(feature, height)
    }
}

function setShapeColorBackground(shape: Shape, color: string, design: Design): Shape{  // будет вызывать функцию, которая меняет цвет фона - changeColorBackground
    return {
        ...shape,
        design: changeColorBackground(color, design)
    }
}

function changeColorBackground(color: string, design: Design): Design{
    return {
        ...design,
        colorBackground: color,
    }
}

function setShapeColorStroke(shape: Shape, color: string, design: Design): Shape{   // будет вызывать функцию, которая меняет цвет обводки - changeColorStroke
    return {
        ...shape,
        design: changeColorStroke(color, design)
    }
}

function changeColorStroke(color: string, design: Design): Design{
    return {
        ...design,
        colorStroke: color,
    }
}

// создание дизайна, меняем цвет фона, обводки

function createDesign(colorBackground: string, colorStroke: string): Design{
    return {
        colorBackground: colorBackground,
        colorStroke: colorStroke
    }
}
