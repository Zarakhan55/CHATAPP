export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #3e2723; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fdfcf7;">
    
    <!-- Header -->
    <div style="background: linear-gradient(to right, #8d6e63, #5d4037); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <img src="https://cdn-icons-png.flaticon.com/512/869/869636.png" 
           alt="Messenger Logo" 
           style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: #fff8e1; padding: 10px;">
      <h1 style="color: #fffde7; margin: 0; font-size: 28px; font-weight: 600;">Welcome to Messenger!</h1>
    </div>

    <!-- Content -->
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <p style="font-size: 18px; color: #6d4c41;"><strong>Hello ${name},</strong></p>
      <p>We’re delighted to welcome you to our platform! Messenger helps you connect with friends, family, and colleagues in real-time—anywhere in the world.</p>
      
      <!-- Steps -->
      <div style="background-color: #f9f6f2; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #8d6e63;">
        <p style="font-size: 16px; margin: 0 0 15px 0; color: #5d4037;"><strong>Start your journey with these steps:</strong></p>
        <ul style="padding-left: 20px; margin: 0; color: #4e342e;">
          <li style="margin-bottom: 10px;">Upload a profile picture</li>
          <li style="margin-bottom: 10px;">Find and add your contacts</li>
          <li style="margin-bottom: 10px;">Start a new conversation</li>
          <li style="margin-bottom: 0;">Share photos, videos, and more</li>
        </ul>
      </div>
      
      <!-- Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href=${clientURL} 
           style="background: linear-gradient(to right, #8d6e63, #5d4037); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">Open Messenger</a>
      </div>
      
      <p>If you need help, our team is just one message away.</p>
      <p style="margin-top: 25px; margin-bottom: 0;">Warm regards,<br>The Messenger Team</p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #9e7e6d; font-size: 12px;">
      <p>© 2025 Messenger. All rights reserved.</p>
      <p>
        <a href="#" style="color: #795548; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
        <a href="#" style="color: #795548; text-decoration: none; margin: 0 10px;">Terms of Service</a>
        <a href="#" style="color: #795548; text-decoration: none; margin: 0 10px;">Contact Us</a>
      </p>
    </div>
  </body>
  </html>
  `;
}
