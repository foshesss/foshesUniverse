const isOverflowing = (el) => {
    if (el === null) return false;

    var curOverf = el.style.overflow;
      
    if ( !curOverf || curOverf === "visible" )
        el.style.overflow = "hidden";
      
    var isOverflowing = el.clientWidth < el.scrollWidth;
      
    el.style.overflow = curOverf;
      
    return isOverflowing;
}

export default isOverflowing;