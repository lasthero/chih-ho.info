
const PDFViewer = ({ src }: any) => {
    return (
    <div style={{ height: '600px', overflowY: 'auto' }}>
      <embed src={src} type="application/pdf" width="100%" height="100%" />
    </div>
    );
  };
  
export default PDFViewer;
  