import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  public CantidadFirmas = 2

  constructor() { }

  ngOnInit(): void {
    // this.Horizontal()

  }

  Vertical() {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    doc.setProperties({
      title: "CERTIFICADO DEL CURSO",
      subject: "https://github.com/elpoloxrodriguez",
      author: "SISTEMA DE AULAS VIRTUALES",
      keywords: "generated, javascript, web 2.0, ajax",
      creator: "CAP. ANDRÉS RICARDO RODRÍGUEZ DURÁN",
    });

    doc.addImage('assets/logos/ejb.png', "PNG", 10, 10, 25, 25);
    doc.addImage('assets/logos/cacfr.png', "PNG", 170, 10, 25, 25);
    // doc.addImage('assets/certificados/cacfr.png', "PNG", 40, 60, 120, 120);
  

    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.text(
      "REPÚBLICA BOLIVARIANA DE VENEZUELA",
      pageWidth / 2,
      pageHeight - 280,
      { align: "center" }
    );
    doc.text(
      "MINISTERIO DEL PODER POPULAR PARA LA DEFENSA",
      pageWidth / 2,
      pageHeight - 275,
      { align: "center" }
    );
    doc.text(
      "COMANDANCIA GENERAL DEL EJÉRCITO",
      pageWidth / 2,
      pageHeight - 270,
      { align: "center" }
    );
    doc.text(
      "DIRECCIÓN DE APRESTO OPERACIONAL",
      pageWidth / 2,
      pageHeight - 265,
      { align: "center" }
    );
    doc.text(
      "CENTRO DE ADIESTRAMIENTO DE COMBATE, FORMACION Y REENTRENAMIENTO ", pageWidth / 2, pageHeight - 260, { align: "center" }
    );
    doc.text("CACIQUE TIUNA", pageWidth / 2, pageHeight - 255, { align: "center" });
    doc.setFont(undefined, "");


    doc.setFontSize(30);
    doc.setFont(undefined, "bold");
    doc.text("CERTIFICADO", pageWidth / 2, pageHeight - 220, { align: "center" });

    doc.setLineWidth(8);
    doc.setDrawColor(0, 0, 255);
    doc.rect(5, 5, 200, 287); // empty red square  

    doc.setLineWidth(3);
    doc.setDrawColor(255, 0, 0);
    doc.rect(5, 5, 200, 287); // empty red square  

    doc.setFontSize(14);
    doc.text("El Comandante General del Ejército Bolivariano, previo voto favorable del consejo de la Insignia Barra 'Honor al Mérito de la Comandancia General del Ejército Bolivariano', Otorga el Presente Diploma  con la Insignia Correspondiente en su Única Clase al ciudadado (a): ",
      14,
      110,
      { maxWidth: 180, align: "justify" }
    );

  doc.setFontSize(18);
  doc.text("CAP. ANDRÉS RICARDO RODRÍGUEZ DURÁN",
  pageWidth / 2, pageHeight - 150,
    {  align: "center" }
  );    



  doc.setFontSize(14);
  doc.text("Por haber acumulado méritos suficientes que lo hacen acreedor a tal distinción de acuerdo al artículo 15 Aparte 'G' del reglamento respectivo",
    14,
    170,
    { maxWidth: 180, align: "justify" }
    // lineHeightFactor: 1
  );


  doc.setFontSize(10);
  doc.text("El Presente Diploma Quedo Registrado Bajo el N# 597 Folio 40 letra 'C' del Libro Correspondiente.",
    14,
    190,
    { maxWidth: 90, align: "justify" }
  );

  doc.setFontSize(10);
  doc.text("Caracas, 10 de Junio de 2022",
    140,
    190,
    { maxWidth: 90, align: "justify" }
  );



 switch (this.CantidadFirmas) {
  case 1:
    doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",105,240,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",105,245, { align: "center" }
    );
    break;
  case 2:
    doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",60,240,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",60,245, { align: "center" }
      );
      doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",150,240,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",150,245, { align: "center" }
      );
    break;
  case 3:
    doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",60,230,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",60,235, { align: "center" }
      );
      doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",150,230,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",150,235, { align: "center" }
      );
    doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",105,260,{ align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",105,265, { align: "center" }
      );
    break;
  case 4:
      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",60,220,{ align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",60,225, { align: "center" }
        );
        doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",150,220,{ align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",150,225, { align: "center" }
        );
        doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",60,260,{ align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",60,265, { align: "center" }
        );
        doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",150,260,{ align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",150,265, { align: "center" }
        );
    break;
  default:
    break;
 }


    // doc.save("a4.pdf");
    // doc.autoPrint();
    doc.output("dataurlnewwindow", { filename: 'Cerfificado.pdf' });
  }

 
  Horizontal() {
    const doc = new jsPDF('l');
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    doc.setProperties({
      title: "CERTIFICADO DEL CURSO",
      subject: "https://github.com/elpoloxrodriguez",
      author: "SISTEMA DE AULAS VIRTUALES",
      keywords: "generated, javascript, web 2.0, ajax",
      creator: "CAP. ANDRÉS RICARDO RODRÍGUEZ DURÁN",
    });
    doc.addImage('assets/logos/ejb.png', "PNG", 15, 15, 25, 25);
    doc.addImage('assets/logos/cacfr.png', "PNG", 257, 15, 25, 25);
    // doc.addImage('assets/certificados/cacfr.png', "PNG", 40, 60, 120, 120);
  
    doc.setLineWidth(8);
    doc.setDrawColor(0, 0, 255);
    doc.rect(5, 5, 287, 200); // empty red square  

    doc.setLineWidth(3);
    doc.setDrawColor(255, 0, 0);
    doc.rect(5, 5, 287, 200); // empty red square 


    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.text(
      "REPÚBLICA BOLIVARIANA DE VENEZUELA",
      pageWidth / 2,
      pageHeight - 195,
      { align: "center" }
    );
    doc.text(
      "MINISTERIO DEL PODER POPULAR PARA LA DEFENSA",
      pageWidth / 2,
      pageHeight - 190,
      { align: "center" }
    );
    doc.text(
      "COMANDANCIA GENERAL DEL EJÉRCITO",
      pageWidth / 2,
      pageHeight - 185,
      { align: "center" }
    );
    doc.text(
      "DIRECCIÓN DE APRESTO OPERACIONAL",
      pageWidth / 2,
      pageHeight - 180,
      { align: "center" }
    );
    doc.text(
      "CENTRO DE ADIESTRAMIENTO DE COMBATE, FORMACION Y REENTRENAMIENTO ", pageWidth / 2, pageHeight - 175, { align: "center" }
    );
    doc.text("CACIQUE TIUNA", pageWidth / 2, pageHeight - 170, { align: "center" });
    doc.setFont(undefined, "");

    doc.setFontSize(30);
    doc.setFont(undefined, "bold");
    doc.text("CERTIFICADO", pageWidth / 2, pageHeight - 150, { align: "center" });

    doc.setFontSize(14);
    doc.text("El Comandante General del Ejército Bolivariano, previo voto favorable del consejo de la Insignia Barra 'Honor al Mérito de la Comandancia General del Ejército Bolivariano', Otorga el Presente Diploma  con la Insignia Correspondiente en su Única Clase al ciudadado (a): ",
    pageWidth / 10, pageHeight - 133,
      { maxWidth: 240, align: "justify" }
    );

    doc.setFontSize(18);
    doc.text("CAP. ANDRÉS RICARDO RODRÍGUEZ DURÁN",
    pageWidth / 2, pageHeight - 108,
      {  align: "center" }
    );
    
    doc.setFontSize(14);
  doc.text("Por haber acumulado méritos suficientes que lo hacen acreedor a tal distinción de acuerdo al artículo 15 Aparte 'G' del reglamento respectivo",
  pageWidth / 10, pageHeight - 96,
    
    { maxWidth: 240, align: "justify" }
    // lineHeightFactor: 1
  );

  doc.setFontSize(10);
  doc.text("El Presente Diploma Quedo Registrado Bajo el N# 597 Folio 40 letra 'C' del Libro Correspondiente.",
  pageWidth / 10, pageHeight - 80,
    { maxWidth: 90, align: "justify" }
  );

  doc.setFontSize(10);
  doc.text("Caracas, 21 de Julio de 2022",
  pageWidth - 80, pageHeight - 80,
    { maxWidth: 90, align: "justify" }
  );

  
 switch (this.CantidadFirmas) {
  case 1:
    doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 150, pageHeight - 40, { align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",pageWidth - 150, pageHeight - 35, { align: "center" }
    );
    break;
    case 2:
      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 80, pageHeight - 40, { align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",pageWidth - 80, pageHeight - 35, { align: "center" }
      );

      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 220, pageHeight - 40, { align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",pageWidth - 220, pageHeight - 35, { align: "center" }
      );
      break;
      case 3:
        doc.setFontSize(12);
        doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 80, pageHeight - 50, { align: "center" });
        doc.setFontSize(10);
        doc.text("Comandante General del Ejército Bolivariano",pageWidth - 80, pageHeight - 45, { align: "center" }
        );
  
        doc.setFontSize(12);
        doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 220, pageHeight - 50, { align: "center" });
        doc.setFontSize(10);
        doc.text("Comandante General del Ejército Bolivariano",pageWidth - 220, pageHeight - 45, { align: "center" }
        ); 

        doc.setFontSize(12);
    doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 150, pageHeight - 25, { align: "center" });
    doc.setFontSize(10);
    doc.text("Comandante General del Ejército Bolivariano",pageWidth - 150, pageHeight - 20, { align: "center" }
        );
      break;
      case 4:
      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 80, pageHeight - 20, { align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",pageWidth - 80, pageHeight - 15, { align: "center" }
      );

      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 220, pageHeight - 20, { align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",pageWidth - 220, pageHeight - 15, { align: "center" }
      );

      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 80, pageHeight - 50, { align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",pageWidth - 80, pageHeight - 45, { align: "center" }
      );

      doc.setFontSize(12);
      doc.text("MG Félix Ramón Osorio Guzmán",pageWidth - 220, pageHeight - 50, { align: "center" });
      doc.setFontSize(10);
      doc.text("Comandante General del Ejército Bolivariano",pageWidth - 220, pageHeight - 45, { align: "center" }
      );
    default:
    break;
 }
    
    // doc.autoPrint();
    doc.output("dataurlnewwindow", { filename: 'Cerfificado.pdf' })
  }
}