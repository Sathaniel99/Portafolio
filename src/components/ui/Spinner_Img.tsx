import { Spinner } from "@/components/ui/index";
import { useState } from "react";
import { TriangleAlertIcon } from "lucide-react";

interface Spinner_Img_Props {
    img: string;
    altImg: string;
    imgClassName?: string;
    spinnerClassName?: string;
    onError?: () => void;
}

export function Spinner_Img({ img, altImg, imgClassName = "", spinnerClassName = "", onError }: Spinner_Img_Props) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
        if (onError) onError();
    };

    if (hasError) {
        return (
        <div className="text-center text-gray-500 flex flex-col items-center justify-center w-full h-full">
            <TriangleAlertIcon className="size-6 text-red-600" />
            <span className="text-center text-red-600 font-bold">Error al cargar la imagen</span>
        </div>);
    }

    return (
        <>
            {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Spinner className={`animate-pulse ${spinnerClassName}`} />
                </div>
            )}
            <img
                className={`object-contain h-full w-full m-auto ${imgClassName}`}
                loading="lazy"
                src={img}
                alt={altImg}
                onLoad={() => setIsImageLoaded(true)}
                onError={handleError}
            />
        </>
    );
}
