import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 158 40" {...props}>
      <g fill="none" fillRule="nonzero">
        <path
          d="M20.082 15L22 23h-.004c-2.823-.649-5.646-2.213-8.473-2.213-2.828 0-5.65 1.564-8.474 2.213L5 22.988 6.914 15h13.168z"
          fill="#D4EDFF"
          opacity={0.5}
        />
        <path
          d="M22.94 28.074a2.377 2.377 0 01-.47 2.025c-.46.57-1.158.9-1.895.901H6.425a2.436 2.436 0 01-1.894-.9 2.377 2.377 0 01-.472-2.026l1.092-4.796.049.012C7.973 22.62 10.747 21 13.524 21c2.778 0 5.551 1.619 8.325 2.29h.004l1.088 4.784z"
          fill="#EEF6FF"
        />
        <path
          d="M11.915 28.073L13 15H9.636L7.052 28.073C6.756 29.573 7.758 31 9.11 31h3.67c-.567 0-.988-1.426-.864-2.927z"
          fill="#FFF"
        />
        <path
          d="M5 24c2.745-.577 5.73-1.97 8.48-1.97S19.255 23.424 22 24l-.276-1.03S16.229 21 13.48 21c-2.75 0-5.495 1.392-8.24 1.97L5 24z"
          fill="#FFF"
          opacity={0.75}
        />
        <g opacity={0.2} fill="#2C4B75">
          <path d="M22.752 28.073L19.833 15h-2.77l1.052 13.073c.12 1.5-.288 2.927-.838 2.927h3.478c1.312 0 2.285-1.426 1.997-2.927z" />
          <path d="M22.727 27.997a2.38 2.38 0 01-2.3 1.803H6.573a2.38 2.38 0 01-2.3-1.803l-.017.076a2.42 2.42 0 00.462 2.026c.45.57 1.133.901 1.855.901h13.854c.721 0 1.404-.331 1.854-.9.451-.57.621-1.316.463-2.027l-.017-.076zM20.1 16.2l-.267-1.2H7.166L6.9 16.2z" />
        </g>
        <path
          d="M22.656 13.009c.336.333.436.835.255 1.271-.182.436-.61.72-1.085.72H6.174A1.17 1.17 0 015 13.833a1.17 1.17 0 011.174-1.166h1.193A7.03 7.03 0 0114 8a7.03 7.03 0 016.633 4.667h1.193c.311 0 .61.123.83.342z"
          fill="#CED8EE"
        />
        <g opacity={0.75} transform="translate(8 8)" fill="#FFF">
          <path d="M4.53 5.056C4.53 2.263 5.634 0 7 0 4.043 0 1.647 2.263 1.647 5.056c0 1.944 2.882 1.166 2.882 0z" />
          <rect x={0.411} y={4.667} width={5.353} height={2.333} rx={1.167} />
        </g>
        <g opacity={0.2} fill="#2C4B75">
          <path d="M21.8 12.667H17c.4 0 .8.522.8 1.166 0 .645-.4 1.167-.8 1.167h4.8c.662 0 1.2-.522 1.2-1.167 0-.644-.538-1.166-1.2-1.166z" />
          <path d="M18.011 12.667l1.389.777 1.18-.777C19.565 9.87 16.849 8 13.8 8c-.155 0-.308.008-.46.018 2.165.18 3.977 2.065 4.671 4.649zM21.8 15a1.218 1.218 0 010 0z" />
        </g>
        <path
          d="M21.143 31H6.857a2.866 2.866 0 01-2.231-1.063 2.815 2.815 0 01-.556-2.392l3.001-13.23A.407.407 0 017.47 14h13.062c.19 0 .356.131.398.316l3.001 13.229c.19.84-.014 1.72-.556 2.392A2.866 2.866 0 0121.143 31zM7.796 14.81l-2.93 12.912c-.136.6.01 1.229.397 1.709.388.48.974.76 1.594.76h14.286c.62 0 1.206-.28 1.594-.76a2.01 2.01 0 00.397-1.709l-2.93-12.912H7.796z"
          fill="#6D6DAA"
        />
        <path
          d="M21.607 23a.397.397 0 01-.094-.011 28.13 28.13 0 01-3.038-.987c-1.642-.603-3.34-1.226-4.975-1.226-1.635 0-3.334.624-4.977 1.227-.992.385-2.005.714-3.035.986a.398.398 0 01-.378-.109.384.384 0 01-.094-.377.391.391 0 01.284-.268c1-.264 1.985-.584 2.948-.96C9.957 20.65 11.723 20 13.5 20c1.776 0 3.542.648 5.25 1.275.964.375 1.949.696 2.95.96a.388.388 0 01.297.423.392.392 0 01-.39.342zM21.417 15H5.583A1.592 1.592 0 014 13.4c0-.884.709-1.6 1.583-1.6h.932C7.648 8.903 10.418 7 13.5 7c3.083 0 5.852 1.903 6.985 4.8h.932c.874 0 1.583.716 1.583 1.6 0 .884-.709 1.6-1.583 1.6zM5.583 12.6a.796.796 0 00-.791.8c0 .442.354.8.791.8h15.834a.796.796 0 00.791-.8c0-.442-.354-.8-.791-.8H20.21a.395.395 0 01-.373-.266C18.891 9.617 16.35 7.8 13.5 7.8s-5.39 1.817-6.338 4.534a.396.396 0 01-.373.266H5.583z"
          fill="#6D6DAA"
        />
        <path
          d="M15.5 13a.5.5 0 110-1 .5.5 0 010 1zM11.5 13a.5.5 0 110-1 .5.5 0 010 1zM13.5 11a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#6D6DAA"
        />
        <path
          d="M49.2 11.408l-2.688.384c-.256-1.28-.512-1.92-1.12-2.656-1.024-1.216-2.656-1.856-4.736-1.856-3.296 0-5.6 1.76-5.6 4.352 0 1.664.896 2.848 2.784 3.616.864.352.896.352 4.576 1.152 5.12 1.088 7.168 3.04 7.168 6.752 0 4.512-3.104 7.072-8.608 7.072-3.584 0-6.24-1.056-7.712-3.04-.832-1.12-1.184-2.112-1.504-4.224l2.784-.352c.096 1.536.32 2.304.992 3.168 1.056 1.408 2.976 2.208 5.344 2.208 3.808 0 6.112-1.792 6.112-4.768 0-1.568-.64-2.752-1.856-3.424-1.056-.608-1.408-.704-5.28-1.568-2.016-.416-3.264-.864-4.352-1.472-1.984-1.12-2.976-2.816-2.976-5.056 0-4.032 3.232-6.624 8.192-6.624 3.168 0 5.632 1.024 7.072 2.944.736.96 1.056 1.76 1.408 3.392zm13.312 18.4v-2.272c-1.248 1.12-1.856 1.536-2.944 1.952-1.088.416-2.24.64-3.328.64-3.52 0-5.664-1.824-5.664-4.864 0-2.56 1.6-4.416 4.576-5.248 1.888-.544 3.424-.736 7.36-.832v-1.856c0-2.176-1.376-3.296-4.032-3.296-1.76 0-3.072.448-3.968 1.376-.416.448-.672.896-.992 1.856l-2.496-.544c.576-1.472.992-2.144 1.792-2.848 1.312-1.216 3.232-1.824 5.632-1.824 4.224 0 6.4 1.792 6.4 5.248v8.992c0 1.44.064 2.24.256 3.52h-2.592zm0-6.656v-2.08c-3.808.096-5.632.32-7.072.928-1.632.672-2.432 1.76-2.432 3.296 0 1.76 1.312 2.88 3.392 2.88 1.856 0 3.872-.896 5.12-2.272.736-.8.992-1.472.992-2.752zM66.96 5.488h2.88c-.16 1.152-.224 2.016-.224 3.616v17.12c0 1.44.064 2.304.224 3.584h-2.88c.16-1.152.224-2.144.224-3.584V9.072c0-1.568-.064-2.432-.224-3.584zm6.88 2.304h2.88c-.16 1.024-.224 2.176-.224 3.552v1.216h1.536c1.472 0 2.144-.032 3.264-.192V14.8c-1.024-.16-1.824-.192-3.264-.192h-1.536v11.136c0 .928.128 1.408.416 1.696.352.352.896.544 1.568.544.832 0 1.472-.192 2.528-.832l.704 2.24c-1.312.544-2.304.736-3.616.736-1.408 0-2.496-.352-3.136-.992-.64-.64-.896-1.568-.896-3.072V14.608h-1.28c-1.088 0-1.824.064-2.88.192v-2.432c.896.16 1.536.192 2.88.192h1.28v-1.216c0-1.28-.064-2.496-.224-3.552zm24.896 3.616l-2.688.384c-.256-1.28-.512-1.92-1.12-2.656-1.024-1.216-2.656-1.856-4.736-1.856-3.296 0-5.6 1.76-5.6 4.352 0 1.664.896 2.848 2.784 3.616.864.352.896.352 4.576 1.152 5.12 1.088 7.168 3.04 7.168 6.752 0 4.512-3.104 7.072-8.608 7.072-3.584 0-6.24-1.056-7.712-3.04-.832-1.12-1.184-2.112-1.504-4.224l2.784-.352c.096 1.536.32 2.304.992 3.168 1.056 1.408 2.976 2.208 5.344 2.208 3.808 0 6.112-1.792 6.112-4.768 0-1.568-.64-2.752-1.856-3.424-1.056-.608-1.408-.704-5.28-1.568-2.016-.416-3.264-.864-4.352-1.472-1.984-1.12-2.976-2.816-2.976-5.056 0-4.032 3.232-6.624 8.192-6.624 3.168 0 5.632 1.024 7.072 2.944.736.96 1.056 1.76 1.408 3.392zm18.56 18.4h-2.208c-.128-.672-.352-1.504-.64-2.4l-3.136-9.312c-.064-.16-.224-.832-.544-2.016-.256.896-.512 1.76-.608 2.08l-3.104 9.248c-.32.928-.576 1.856-.672 2.4h-2.24c-.192-.8-.192-.864-.704-2.432l-3.424-11.04a171.884 171.884 0 00-1.28-3.776h2.944c.064.992.288 2.08.736 3.488l2.336 7.968c.16.544.352 1.216.576 2.336.192-.736.576-2.016.672-2.304l3.04-9.056c.352-.96.576-1.856.64-2.432h2.144c.096.576.32 1.472.64 2.432l3.072 9.216c.096.288.288.992.416 1.44.128.48.128.48.192.704.288-1.248.448-1.984.512-2.176l2.4-8.128c.416-1.376.64-2.56.704-3.488h2.912c-.256.672-.672 1.952-1.248 3.776l-3.456 11.072c-.416 1.28-.544 1.76-.672 2.4zm16.832 0v-2.272c-1.248 1.12-1.856 1.536-2.944 1.952-1.088.416-2.24.64-3.328.64-3.52 0-5.664-1.824-5.664-4.864 0-2.56 1.6-4.416 4.576-5.248 1.888-.544 3.424-.736 7.36-.832v-1.856c0-2.176-1.376-3.296-4.032-3.296-1.76 0-3.072.448-3.968 1.376-.416.448-.672.896-.992 1.856l-2.496-.544c.576-1.472.992-2.144 1.792-2.848 1.312-1.216 3.232-1.824 5.632-1.824 4.224 0 6.4 1.792 6.4 5.248v8.992c0 1.44.064 2.24.256 3.52h-2.592zm0-6.656v-2.08c-3.808.096-5.632.32-7.072.928-1.632.672-2.432 1.76-2.432 3.296 0 1.76 1.312 2.88 3.392 2.88 1.856 0 3.872-.896 5.12-2.272.736-.8.992-1.472.992-2.752zm7.264 13.376h-2.816c.16-1.248.224-2.272.224-3.584V16.24c0-1.536-.064-2.464-.224-3.68h2.56v1.824c0 .416-.032.768-.096 1.312 1.44-2.272 3.68-3.456 6.528-3.456 4.928 0 7.936 3.36 7.936 8.928 0 5.44-3.072 8.928-7.872 8.928-2.816 0-5.088-1.184-6.592-3.392.096.896.128 1.376.128 2.24v3.968c0 1.504.064 2.432.224 3.616zm6.016-8.512c3.488 0 5.6-2.592 5.6-6.848 0-4.352-2.048-6.848-5.632-6.848-3.68 0-6.176 2.752-6.176 6.88 0 2.08.672 4 1.824 5.12 1.12 1.088 2.72 1.696 4.384 1.696z"
          fillOpacity={0.9}
          fill={textColor}
        />
      </g>
    </Svg>
  );
};

export default Logo;
