/*
 * @Author: 李文超
 * @Date: 2021-04-06 10:38:44
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-09 11:52:04
 * @Description: file content
 * @FilePath: \vite-typescript-project-for-test\src\utils\tools.ts
 */
// 由于浏览器差异和不一致，强烈建议不要使用Date.parse解析字符串
// new Date(dateString)原理相同，因此谨慎使用
// 由于浏览器差异和不一致性，强烈建议不要使用Date构造函数（和Date.parse，它们是等效的）解析日期字符串。
// new Date('2020/1/1')还会出现不同时区的问题
class DateTime {
    // 令牌YYYY-MM-DD HH:mm:ss
    // 时间存在的类型： Date类型，字符串，时间戳 将date类型作为中转
    static defaultFormat = 'YYYY-MM-DD HH:mm:ss'
    constructor() {

    }
    // 匹配到指定索引
    static matchIndex(str: string, reg: RegExp): number[] {
        let resList: number[] = []
        let res = str.match(reg)
        if (res) {
            let matchStr = res[0]
            let matchStart = res.index || 0
            let matchEnd = matchStart + matchStr.length
            resList.push(matchStart)
            resList.push(matchEnd)
        }
        return resList
    }
    // 格式化令牌格式字符串到Date
    static formatToDate = (dateStr: string, formatStr: string = DateTime.defaultFormat): Date => {
        function getMatchVal(reg: RegExp): number {
            let resList: number[] = []
            resList = DateTime.matchIndex(formatStr, reg)
            if (resList.length > 0) {
                let start = resList[0]
                let end = resList[1]
                return Number(dateStr.substring(start, end))
            }
            else return 0
        }
        let year = getMatchVal(/Y+/)
        let month = getMatchVal(/M+/) - 1
        let day = getMatchVal(/D+/)
        let hour = getMatchVal(/H+/)
        let minute = getMatchVal(/m+/)
        let second = getMatchVal(/s+/)
        return new Date(year, month, day, hour, minute, second)

    }
    // 格式化Date到令牌格式字符串
    static formatToStr = (date: Date, formatStr: string = DateTime.defaultFormat): string => {
        interface IReg {
            reg: string,
            value: number
        }
        let resStr = formatStr
        let regList: IReg[] = []
        let year = date.getFullYear()
        regList.push({
            reg: 'Y+',
            value: year
        })
        let month = date.getMonth() + 1
        regList.push({
            reg: 'M+',
            value: month
        })

        let day = date.getDate()
        regList.push({
            reg: 'D+',
            value: day
        })

        let hour = date.getHours()
        regList.push({
            reg: 'H+',
            value: hour
        })

        let minute = date.getMinutes()
        regList.push({
            reg: 'm+',
            value: minute
        })

        let second = date.getSeconds()
        regList.push({
            reg: 's+',
            value: second
        })
        regList.forEach((item) => {
            if (item.reg === 'Y+') {
                resStr = resStr.replace(new RegExp(item.reg, 'g'), (match) => {
                    return String(item.value).substring(4 - match.length)
                })

            }
            else {
                resStr = resStr.replace(new RegExp(item.reg, 'g'), (match) => {
                    if (match.length === 1) {
                        return String(item.value)
                    }
                    else {
                        // 小于10则拼接0
                        return item.value < 10 ? `0${String(item.value)}` : String(item.value)
                    }
                })

            }
        })

        return resStr

    }
    // 日期字符串，在今日之后,不包含今日 仅支持到天的字符串
    static isFutureDay = (str: string): boolean => {
        let strDate = DateTime.formatToDate(str)
        let nowDate = new Date()
        // console.log('==========',nowDate.getTime(),strDate.getTime() )
        if (nowDate.getTime() < strDate.getTime()) {
            return true
        }
        else {
            return false
        }
    }
    // 日期字符串，在过去,包含今日  仅支持到天的字符串
    static isPastDay = (str: string): boolean => {
        let strDate = DateTime.formatToDate(str)
        let nowDate = new Date()
        if (nowDate.getTime() > strDate.getTime()) {
            return true
        }
        else {
            return false
        }

    }
    // 是否过期 精确到秒
    static isOverTime = (str: string): boolean => {
        let strDate = DateTime.formatToDate(str)
        let nowDate = new Date()
        console.log('==========is over time', strDate, nowDate)
        if (nowDate.getTime() >= strDate.getTime()) {
            return false
        }
        else {
            return true
        }


    }
    // 今日日期字符串
    static todayStr = (formatStr: string = 'YYYY-MM-DD'): string => {
        let nowDate = new Date()
        return DateTime.formatToStr(nowDate, formatStr)
    }
    // 获取以今日为起点，最近某天的日期字符串 count可为正负数表示今日前后
    static latestDayStr = (count: number, formatStr: string = 'YYYY-MM-DD'): string => {
        let currentTime = new Date().getTime()
        let targetTime = currentTime + count * 24 * 60 * 60 * 1000
        let targetDate = new Date(targetTime)
        return DateTime.formatToStr(targetDate, formatStr)
    }

}

interface ISizeLocation {
    node: Element | null,
    width: number,
    height: number,
    top: number,
    bottom: number,
    left: number,
    right: number,
    viewHeight: number,
    viewWidth: number,
    initSizeLocation: () => void, // 初始化元素尺寸
    initView: () => void, // 初始化可视区域
    getRelativeLoc: (parent: Element | null) => IRelativeLoc

}
interface IRelativeLoc {
    top: number,
    bottom: number,
    left: number,
    right: number,
    width: number,
    height: number,
    parentWidth: number,
    parentHeight: number
}
// 千万不要尝试用 element.style.width 或 element.style.height 来获得元素的高度和宽度，它们的默认值都是 0，
// 除非你在 html 元素里面设置，否则 js 是无法获得 css 的样式的，必须要用其他的方法。
// JS 中 element 对象提供 offsetHeight, scrollHeight, clientHeight(每个都对应 width)，其中：
// offsetHeight 可以用来计算元素的物理空间，此空间包括内容，padding 和 border（还包括滚动条的宽度，但大多时候滚动条的宽度是计算到 padding 和内容中的）。
// scrollHeight 用来计算可滚动容器的大小，包括不可见的部分，比如一个 300*300 的容器放入一个 600*600 的图片，此时 scrollHeight 为 600，当然，scrollHeight 的值需要加上 padding 的值。
// clientHeight 表示可视区域，包括内容和 padding ，如果有滚动条，还需要减去滚动条的宽度。
class BrowserSizeLocation implements ISizeLocation {
    node: Element | null = null
    width: number = 0
    height: number = 0
    top: number = 0
    bottom: number = 0
    left: number = 0
    right: number = 0
    viewHeight: number = 0
    viewWidth: number = 0
    constructor(selector: string | Element | null) {
        if (!selector) {
            throw new Error('节点不存在')
            return
        }
        let node: Element | null
        if (typeof selector === 'string') {
            node = document.querySelector(selector)
        }
        else {
            node = selector
        }
        if (node) {
            this.node = node
        }
        else {
            throw new Error('未查询到指定选择器元素:' + selector)
        }
        this.initView()
        this.initSizeLocation()
        // console.log('==========log', this.node)
        // console.dir('==========dir', this.node)
    }
    // 初始化元素尺寸
    initSizeLocation = () => {
        // 兼容
        // 从元素内部获取/getComputedStyle
        if (this.node) {
            let rect = this.node.getBoundingClientRect()
            console.log('==========getBoundingClientRect', rect)
            this.width = rect.width
            this.height = rect.height
            this.left = rect.left
            this.top = rect.top
            this.bottom = this.viewHeight - rect.bottom
            this.right = this.viewWidth - rect.right
        }
    }
    // 初始化可视区域
    initView = () => {
        this.viewWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        this.viewHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

    }
    // 获取距离指定容器的距离
    getRelativeLoc = (parent: Element | null): IRelativeLoc => {
        if (!parent) {
            throw new Error('父级元素选择器对应节点不存在')
        }
        if (!parent.contains(this.node)) {
            throw new Error('父级元素选择器对应节点不包含当前目标元素')
        }
        // console.log('==========this.node.offsetTop',this.node.offsetTop)
        // let style: CSSStyleDeclaration
        // style = window.getComputedStyle(parent);
        // let currentStyle = ''
        // if (style.position === 'static') {
        //     throw new Error('父级元素选择器对应节点应该为定位布局')
        //     console.log('==========属性',)
        //     currentStyle = parent.getAttribute("style") || ''
        //     parent.setAttribute("style", "position: relative")

        // }

        // // 父元素是否存在定位
        // console.log('==========parent', style.position)
        let parentSL = new BrowserSizeLocation(parent)

        let loc: IRelativeLoc = {
            top: this.top - parentSL.top,
            bottom: this.bottom - parentSL.bottom,
            left: this.left - parentSL.left,
            right: this.right - parentSL.right,
            width: this.width,
            height: this.height,
            parentWidth: parentSL.width,
            parentHeight: parentSL.height
        }

        return loc
    }
}
class FileOperator {
    // 响应文件选择操作
    // 文件尺寸
}
interface IStyleItem {
    name: string,
    value: string
}

class BrowserOperator {
    // 修改元素style
    // 修改元素class
    // 获取父节点
    static getParent = (node: Element): Element | null => {
        return node.parentElement
    }
    // 元素替换
    static replaceElement = (target: Element | null, insert: Element) => {
        if (!target) {
            console.error('目标元素不存在')
            return
        }
        let parent = BrowserOperator.getParent(target);
        if (parent) {
            parent.replaceChild(insert, target);
        }
    }

    // 是否相等 直接===即可
    // 是否包含 contains方法即可
    // DPR获取 window.devicePixelRatio即可
    // 获取默认滚动条宽度
    static getScrollbarWidth = (): number => {
        let el = document.createElement('div')
        el.style.cssText = "position: fixed;top: -2233px;width: 100px;height:100px;overflow:hidden"
        document.body.appendChild(el)
        let noScrollWidth = el.clientWidth
        console.log('==========无滚动宽度', el.clientWidth, el.offsetWidth)
        el.style.overflowY = 'scroll'
        let scrollWidth = el.clientWidth
        console.log('==========滚动宽度', el.clientWidth, el.offsetWidth)
        document.body.removeChild(el)
        return noScrollWidth - scrollWidth
    }
    // 存在样式名称表，则同步表中内容.否则同步全部样式
    // 注意，样式表必须和浏览器对应，例如火狐并没有border，padding这样的样式
    static cloneStyle = (element: Element, styleList?: string[]): IStyleItem[] => {
        let cssTextList: IStyleItem[] = []
        if (styleList && styleList.length > 0) {
            let styleObj = window.getComputedStyle(element)
            styleList.forEach(key => {
                let val = styleObj.getPropertyValue(key)
                if (val) {
                    cssTextList.push({
                        name: key,
                        value: val
                    })

                }
                else {
                    console.warn('该属性不存在', key)
                }
            })
        }
        else {
            cssTextList = BrowserOperator.cloneAllStyle(element)
        }
        return cssTextList
    }
    // 对CSSStyleDeclaration类型的循环，不能用for in,因为会循环出大量只读属性，不可用keys系列，会在火狐无法循环出样式，怀疑是类继承的问题
    static cloneAllStyle = (element: Element): IStyleItem[] => {
        let styleObj = window.getComputedStyle(element)
        let cssTextList: IStyleItem[] = []
        for (let i = 0; i < styleObj.length; i++) {
            let key = styleObj.item(i)
            if (key) {
                let val = Reflect.get(styleObj, key)
                if (val && /^[^\d]/i.test(key)) {
                    cssTextList.push({
                        name: key,
                        value: val
                    })
                }

            }
        }
        // console.log('==========styleObj', cssTextList)
        return cssTextList
    }
    // 获取一段区域内文本长度 内部可能不仅是纯粹的text文本，可能是多个元素组合
    static getTextWidth = (element: Element | null): number => {
        if (!element) return 0
        console.log('==========元素尺寸', element.clientWidth, element.scrollWidth)

        let cloneNode = element.cloneNode(true) as HTMLElement
        // let styleText = BrowserOperator.cloneStyle(element,["padding-right","padding-top","padding-bottom","padding-left","font-size","font-weight","font-family","border-","white-space"])
        let styleText = BrowserOperator.cloneStyle(element)
        // let cloneNodeStyle = window.getComputedStyle(cloneNode)
        styleText.forEach(item => {
            // console.log('==========styleText.forEach(item', item)
            cloneNode.style[item.name as any] = item.value
            // cloneNodeStyle.setProperty(item.name, item.value)
        })
        // cloneNode.style.display = 'inline-block'
        cloneNode.style.position = 'fixed'
        cloneNode.style.top = '-10000px'
        cloneNode.style.overflow = 'visible'
        cloneNode.style.width = 'auto'
        cloneNode.style.whiteSpace = 'nowrap'
        // console.log('==========cloneNode.style', cloneNode.style)
        document.body.appendChild(cloneNode)
        let totalWidth = new BrowserSizeLocation(cloneNode).width
        console.log('==========拷贝样式', styleText)
        document.body.removeChild(cloneNode)
        return totalWidth
    }
    // 简单版本但是可能有问题的scrollWidth
    // 对谷歌浏览器 宽度200，border10，padding10,元素尺寸clientWidth为180,此时是去除了border，为内容+padding
    // 而scrollwidth 为349,克隆文本长度369，是真实内容+padding
    // 在谷歌浏览器可以随便用，没问题对比的是内容+padding结合是否溢出
    // 对火狐浏览器 宽度200，，border10，padding10,元素尺寸clientWidth为180,此时是去除了border，为内容+padding
    // 而scrollwidth 为339,克隆文本长度369，是真实内容+padding,也不考虑border,但为什么，差了30px?理论应该相差20
    // 这里火狐的scrollwidth计算，为文本长度+padding占位的一半
    // 据测试，火狐不可使用此方案
    // visibility hidden方案,也不考虑，其消失会造成文档流错位抖动，并且是修改原件，容易引发未知错误，因此还是使用clone方案
   

}
class URLOperator {
    // 提取hash和query
    // 添加/删除/修改query
}

export {
    DateTime,
    BrowserSizeLocation,
    IRelativeLoc,
    BrowserOperator
}