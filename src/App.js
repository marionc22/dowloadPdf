import './App.css';

function App() {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('cdc.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cdc.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
  );
}

export default App;
