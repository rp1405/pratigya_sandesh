import React from "react";

const About = () => {
  const containerStyle = {
    padding: "10px",
  };

  const headingStyle = {
    fontSize: "45px",
    marginBottom: "5px",
    marginTop: "0px",
  };

  const contentStyle = {
    fontSize: "20px",
    lineHeight: "1.2",
    marginBottom: "20px",
    marginTop: "5px",
  };

  const subHeadingStyle = {
    fontSize: "26px",
    marginTop: "5px",
    marginBottom: "0px",
  };

  const contactStyle = {
    marginTop: "10px",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>हमारे बारे में</h1>
      <p style={contentStyle}>
        प्रतिज्ञा संदेश समाचार पत्र की नीवं 1976 में स्वर्गीय श्री सुरेश पारीक
        ने रखी थी। यह समाचार पत्र उस दौरान पाक्षिक प्रकाशित हुआ करता था फिर कुछ
        समय बाद इस समाचार पत्र को साप्ताहिक प्रकाशित किया जाने लगा। श्री पारीक
        के निधन के पश्चात 31 जनवरी 2013 में उनके पुत्रों द्वारा प्रतिज्ञा संदेश
        का प्रकाशन दैनिक किया जाने लगा। सन 2013 से यह समाचार पत्र निरंतर दैनिक
        प्रकाशित हो रहा है। प्रतिज्ञा संदेश समाचार पत्र भारत सरकार के डीएवीपी
        विभाग से एवं राजस्थान सरकार के सूचना एवं जनसंपर्क विभाग से विज्ञापनों के
        लिए स्वीकृत है। दैनिक प्रतिज्ञा संदेश समाचार पत्र में राजनैतिक, सामाजिक,
        खेलकूद, मनोरंजन आदि के समाचार प्रकाशित किए जाते हैं।
      </p>
      <h2 style={subHeadingStyle}>संपर्क जानकारी</h2>
      <div style={contactStyle}>
        <p>
          <strong>नाम:</strong> मुकेश पारीक
          <br />
          <strong>मोबाइल:</strong> 9829236892
        </p>
      </div>
      <div style={contactStyle}>
        <p>
          <strong>नाम:</strong> अंकुर पारीक
          <br />
          <strong>मोबाइल:</strong> 9950642998
        </p>
      </div>
      <div style={contactStyle}>
        <p>
          <strong>Email:</strong> pratigyasandesh@gmail.com
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
