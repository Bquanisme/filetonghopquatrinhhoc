/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.namcanchi;

import java.util.Scanner;

/**
 *
 * @author huyqu
 */
public class NamCanChi {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhap vao nam: ");
        int year = scanner.nextInt();
        scanner.close();
        String[] can = {"Canh", "Tan", "Nham", "Quy", "Giap", "At", "Binh", "Đinh", "Mau", "Ky"};
        String[] chi = {"Than", "Dau", "Tuat", "Hoi", "Ti", "Suu", "Dan", "Mao", "Thin", "Ty", "Ngo", "Mui"};
        int canIndex = (year - 4) % 10;
        int chiIndex = (year - 4) % 12;
        String canChi = can[canIndex] + " " + chi[chiIndex];
        System.out.println("Do la nam " + canChi);
    }
}
