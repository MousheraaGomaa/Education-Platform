import { memo } from "react"
const SvgPainter = ({Tcolor,Bcolor}) => (
    <svg width="0" height="0">
        <linearGradient id="svg_painter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor={Tcolor} offset="10%" />
            <stop stopColor={Bcolor} offset="80%" />
        </linearGradient>
    </svg>
)

export default memo(SvgPainter);