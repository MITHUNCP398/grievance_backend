const Projects = require('../Model/projectmodel')
const sendMail = require('../helper/mailService.js');

exports.addGrievance = async (req, res) => {
  try {
    const { name, email, grievance } = req.body;
    console.log('Received grievance:', req.body);

    // Save the grievance to the database
    const newGrievance = new Projects({
      name,
      email,
      grievance,
    });

    const result = await newGrievance.save();

    // Prepare email options
    const subject = 'Grievance Received';
    const text = `Hello ${name},\n\nWe have received your grievance. Here are the details:\n\nName: ${name}\nEmail: ${email}\nGrievance: ${grievance}\n\nThank you for reaching out. We will get back to you shortly.`;

    // Send email
    await sendMail(email, subject, text);

    // Return success response
    res.status(200).json({
      message: 'Complaint received successfully, and email sent.',
      data: newGrievance,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(403).json({ message: error.message });
  }
};


exports.getgrievances= async(req,res)=>{
    try {
        const projects = await Projects.find({})
   return res.status(200).json({message: "All grievances",data: projects})
    } catch (error) {
       return res.status(403).json({message: error.message}) 
    }
}

exports.deletegrievance = async(req, res) => {
  try {
    const id = req.params.id
    const projects = await Projects.findByIdAndDelete(id)
    console.log('id',id)
    console.log('projects',projects)
    return res.status(200).json({message: "Deleted successfully",data: projects}) 
  }
  catch {
    return res.status(403).json({message: error.message}) 
  }
}
