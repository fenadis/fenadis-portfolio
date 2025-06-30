import * as React from 'react'

interface FirebaseIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string
}

const Firebase: React.FC<FirebaseIconProps> = ({ ...props }) => {
    return (
      <svg
        width={100}
        height={100}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.239 15.063L7.21 2.381a.453.453 0 01.847-.145l2.12 3.98-4.938 8.847z"
          fill="#FFA000" // orange
        />
        <path
          d="M19.24 18.14L17.363 6.47a.454.454 0 00-.766-.246L4.266 19.875l6.346-10.6 8.628 9.002a.457.457 0 00.7-.5 83.5 83.5 0 01-.7-9.636l.726-1.12a.456.456 0 01.8.067l1.04 2.28c.14.307.09.67-.13.93l-2.436 2.45z"
          fill="#F57C00" // deep orange
        />
        <path
          d="M13.917 7.955l-2.32-4.35a.452.452 0 00-.77-.013L5.24 15.063l8.68-7.108h-.003z"
          fill="#FFCA28" // yellow-orange
        />
      </svg>
    )
}

export default Firebase
