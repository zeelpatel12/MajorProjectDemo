package com.CMS.Service;

import java.sql.*;



public class Validate {
    public static boolean checkUser(String userName,String password) 
    {
        boolean st =false;
        try {

            //loading drivers for mysql
            Class.forName("com.mysql.jdbc.Driver");

            //creating connection with the database
            Connection con = DriverManager.getConnection("jdbc:mysql:/ /localhost:3306/demo","root","root");
            PreparedStatement ps = con.prepareStatement("select * from user where username=? and password=?");
            ps.setString(1, userName);
            ps.setString(2, password);
            ResultSet rs =ps.executeQuery();
            st = rs.next();

        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return st;                 
    }   
}
