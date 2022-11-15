package com.CMS.Controller;
import java.io.IOException;

import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import com.CMS.Service.*;

public class LoginServlet extends HttpServlet {
private static final long serialVersionUID = 1L;

public LoginServlet() {
}
 
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
{
	response.setContentType("text/html;charset=UTF-8");
    PrintWriter out = response.getWriter();
    
    String userName = request.getParameter("username");
    String password = request.getParameter("password");
    
  
	if(Validate.checkUser(userName, password))
    {
        RequestDispatcher rs = request.getRequestDispatcher("success.jsp");
        rs.forward(request, response);
    }
    else
    {
       out.println("Username or Password incorrect");
       RequestDispatcher rs = request.getRequestDispatcher("index.html");
       rs.include(request, response);
    }
}  
  
   /* try
    {
        String userValidate = loginDao.authenticateUser(loginBean);
 
        if(userValidate.equals("Admin_Role"))
        {
            System.out.println("Admin's Home");
 
            HttpSession session = request.getSession(); //Creating a session
            session.setAttribute("Admin", userName); //setting session attribute
            request.setAttribute("userName", userName);
 
            request.getRequestDispatcher("/JSP/Admin.jsp").forward(request, response);
        }
        else if(userValidate.equals("Editor_Role"))
        {
            System.out.println("Editor's Home");
 
            HttpSession session = request.getSession();
            session.setAttribute("Editor", userName);
            request.setAttribute("userName", userName);
 
            request.getRequestDispatcher("/JSP/Editor.jsp").forward(request, response);
        }
        else if(userValidate.equals("User_Role"))
        {
            System.out.println("User's Home");
 
            HttpSession session = request.getSession();
            session.setMaxInactiveInterval(10*60);
            session.setAttribute("User", userName);
            request.setAttribute("userName", userName);
 
            request.getRequestDispatcher("/JSP/User.jsp").forward(request, response);
        }
        else
        {
            System.out.println("Error message = "+userValidate);
            request.setAttribute("errMessage", userValidate);
 
            request.getRequestDispatcher("/JSP/Login.jsp").forward(request, response);
        }
    }
    catch (IOException e1)
    {
        e1.printStackTrace();
    }
    catch (Exception e2)
    {
        e2.printStackTrace();
    }*/
} //End of doPost()
