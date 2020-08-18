import React, { useState, useEffect } from 'react'

function ToTop() {
    // useState(初期値)
    // useState（）は[state, setState]の配列を返してくれるので、それぞれに好きな名前を与える。
    const [onTop, setOnTop] = useState(true)

    // scroll時に上部からのオフセットによってstateを更新する
    function onScroll() {
        const offset =
            window.pageYOffset ||
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop

        if (offset >= 200 && !onTop) return false
        if (offset >= 200 && onTop) {
            setOnTop(false)
            return false
        }
        setOnTop(true)
    }

    function smoothScroll(target) {
        const { top } = target.getBoundingClientRect()
        window.scrollTo({
            top: top + window.pageYOffset,
            behavior: "smooth"
        });
    }

    // 今までならcomponentXXXmount系のライフサイクルでやってたeventListenerの登録などをuseEffectでやる
    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    })

    return (
        <a className={onTop ? 'toTop' : 'toTop is-show'} href="#" >
            <i class="fas fa-chevron-up"></i>
        </a>
    )
}

export default ToTop
