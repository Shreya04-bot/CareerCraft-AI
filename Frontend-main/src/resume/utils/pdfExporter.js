// pdfExporter.js - Updated for native printing
export async function exportToPDF(element, fileName = "resume.pdf") {
  if (!element) return;
  
  // Store original styles
  const originalStyles = {
    overflow: document.body.style.overflow,
  };
  
  try {
    // Apply print styles
    document.body.style.overflow = 'visible';
    
    // Add print-specific class to the element
    element.classList.add('printing');
    
    // Use browser's native print functionality
    window.print();
    
  } catch (error) {
    console.error('Print failed:', error);
    // Fallback to html2canvas if native print fails
    await fallbackToCanvasPDF(element, fileName);
  } finally {
    // Restore original styles
    document.body.style.overflow = originalStyles.overflow;
    element.classList.remove('printing');
  }
}

// Keep the canvas version as fallback
async function fallbackToCanvasPDF(element, fileName = "resume.pdf") {
  const scale = 2;
  const rect = element.getBoundingClientRect();
  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: rect.width > rect.height ? "landscape" : "portrait",
    unit: "px",
    format: [rect.width, rect.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, rect.width, rect.height);
  pdf.save(fileName);
}

export function exportNodeAsPNG(element, fileName = "resume.png") {
  if (!element) return;
  html2canvas(element).then((canvas) => {
    canvas.toBlob((blob) => {
      if (blob) saveAs(blob, fileName);
    });
  });
}