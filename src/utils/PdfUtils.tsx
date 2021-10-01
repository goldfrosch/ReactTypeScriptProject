import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class PdfUtils {
    PDFDownload(input: HTMLElement, fileName: string, rotation: boolean) {
        html2canvas(input!, {
            scale: 2,
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 1);
            //new jsPDF("p" => 걍쓰면됨,"mm" => 길이 단위(ex- cm,mm 등...),"a4" => 용지)
            const pdf = new jsPDF("p","mm","a4",true);
            rotation ? 
            pdf.addImage(imgData, "JPEG", 0,0,210,148.5,undefined,"FAST") : 
            pdf.addImage(imgData, "JPEG", 0,0,210,297,undefined,"FAST");
            pdf.save(`${fileName}.pdf`);
        })
    }
}

export default new PdfUtils();