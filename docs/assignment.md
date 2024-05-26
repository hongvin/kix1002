---
id: assignment
slug: /assignment
title: Assignment
hide_table_of_contents: true
---

A second order system of ordinary differential equations (ODE) can be used to describe a motional system involving multiple masses. Consider a system of two horizontally moving masses with displacements $x_1 (t)$ and $x_2 (t)$ respectively. This system is modeled as equations (Eq. 1) and (Eq. 2) as below:

$$
x_1^{\prime \prime} = 5x_1-2x_2 \tag{Eq. 1}
$$

$$
x_2^{\prime \prime} = -2x_1+2x_2 \tag{Eq. 2}
$$

**Part (a): [5 marks]**

Laplace transform is often used to solve an ODE. In a short paragraph (< 100 words), describe the three main stages of solving an ODE using this method. Then, mention two advantages of solving an ODE using this method compared to using other methods that you have learned previously.

**Part (b): [15 marks]**

Solve the above second order system of ODE using the Laplace transform method. For this system, the initial conditions are: $x_1 (0)=M$, $x_1^\prime (0)=0$, $x_2 (0)=0$, $x_2^\prime (0)=0$.

$M$ is based on the last digit of your matric number (e.g. 2210123**4**/2)

| Last digit of matric number | 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     |
| :-------------------------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $M$                         |	10	  | 1	  | 2	  | 3	  | 4	  | 5 	  | 6	  | 7	  | 8	  | 9     |


:::info[Solution]

**Part (a)**

In general, solving an ODE using Laplace transform is a three-stage process:

- **Stage 1:** Apply Laplace transform to the LHS and RHS of the ODE, making sure that the initial conditions are substituted.

- **Stage 2:** The ODE is now an algebraic equation, and so the algebraic equation can be solved to get the solution (dependent variable) function as a function of the Laplace variable ($s$-variable).

- **Stage 3:** Once the solution in Laplace domain is obtained, apply inverse Laplace transform to get back the solution (dependent variable) as a function of the independent variable ($t$-variable).

There are a few advantages of using Laplace transform to solve an ODE: 

1. The initial conditions are automatically taken care of in the first step.

2. The workflow is the same / is systematic regardless of whether the ODE is homogeneous or non-homogeneous.

3. The method is convenient when solving a system of ODEs.

---

**Part (b)**

Given: $x_1^{\prime\prime}=5x_1-2x_2$ and $x_2^{\prime\prime}=-2x_1+2x_2$

With initial conditions: $x_1 (0)=M$, $x_1^\prime (0)=0$, $x_2 (0)=0$, $x_2^\prime (0)=0$.

We re-arrange the two ODEs slightly:

$$
\begin{aligned}
x_1^{\prime\prime} - 5x_1 + 2x_2 &=0 \\
x_2^{\prime\prime} + 2x_1 - 2x_2 &=0
\end{aligned}
$$

Apply Laplace transform to both equations:

$$
\begin{aligned}
s^2 X_1 - sx_1(0) - x_1^\prime (0) - 5X_1 + 2X_2 &=0 \\
s^2 X_2 - sx_2(0) - x_2^\prime (0) + 2X_1 - 2X_2 &=0
\end{aligned}
$$

Substituting the initial values and collecting similar terms give:

$$
\begin{aligned}
(s^2-5) X_1 + 2X_2 &= Ms \\
2X_1 + (s^2-2) X_2 &=0
\end{aligned}
$$

This can be re-written in matrix form for better clarity:

$$
\left[\begin{array}{cc}
s^2-5 & 2 \\
2 & s^2-2
\end{array}\right]\left[\begin{array}{l}
X_1 \\
X_2
\end{array}\right]=\left[\begin{array}{c}
\mathrm{M} s \\
0
\end{array}\right]
$$

The set of equations can be solved by any suitable method (e.g. elimination method, Cramer's rule, etc.). Solution by Cramer's rule is shown here:

Finding determinants, let:
$$
\begin{aligned}
D &=\left|\begin{array}{cc}
s^2-5 & 2 \\
2 & s^2-2
\end{array}\right|=s^4-7 s^2+6 \\
D_1&=\left|\begin{array}{cc}
\mathrm{M} s & 2 \\
0 & s^2-2
\end{array}\right|=\mathrm{M} s^3-2 \mathrm{M} s  \\
D_2&=\left|\begin{array}{cc}
s^2-5 & \mathrm{M} s \\
2 & 0
\end{array}\right|=-2 \mathrm{M} s 
\end{aligned}
$$

Then $X_1$ can be found by $D_1 / D:$ 

$$
X_1(s)=D_1 / D=\frac{\mathrm{M} s^3-2 \mathrm{M} s}{s^4-7 s^2+6}=\frac{\mathrm{M} s^3-2 \mathrm{M} s}{\left(s^2-1\right)\left(s^2-6\right)}=\frac{\mathrm{M} s^3-2 \mathrm{M} s}{(s-1)(s+1)(s-\sqrt{6})(s+\sqrt{6})}=R H S
$$

Consider partial fraction: $\frac{A}{s-1}+\frac{B}{s+1}+\frac{C}{s-\sqrt{6}}+\frac{D}{s+\sqrt{6}}=L H S$

For the numerators:

$$
\begin{aligned}
LHS &=A(s+1)\left(s^2-6\right)+B(s-1)\left(s^2-6\right)+C(s+\sqrt{6})\left(s^2-1\right)+D(s-\sqrt{6})\left(s^2-1\right) \\
& =\mathrm{M} s^3-2 \mathrm{M} s= RHS
\end{aligned}
$$

Trying with $s=1$ :

$$
A(2)(-5)=-\mathrm{M} ; \text { so } A=\frac{\mathrm{M}}{10}
$$

Trying with $s=-1$ :

$$
B(-2)(-5)=\mathrm{M} \text {; so } B=\frac{\mathrm{M}}{10}
$$

Trying with $s=\sqrt{6}$ :

$$
C(2 \sqrt{6})(5)=4 \sqrt{6} \mathrm{M} \text {; so } C=\frac{2 \mathrm{M}}{5}
$$

Trying with $s=-\sqrt{6}$ :

$$
D(-2 \sqrt{6})(5)=-4 \sqrt{6} \mathrm{M} \text {; so } D=\frac{2 \mathrm{M}}{5} 
$$

So we can write $X_1$ in the partial fraction form:

$$
X_1(s)=\frac{\mathrm{M} / 10}{s-1}+\frac{\mathrm{M} / 10}{s+1}+\frac{2 \mathrm{M} / 5}{s-\sqrt{6}}+\frac{2 \mathrm{M} / 5}{s+\sqrt{6}}
$$

Take inverse Laplace transform:

$$
x_1(t)=\frac{\mathrm{M}}{10} e^t+\frac{\mathrm{M}}{10} e^{-t}+\frac{2 \mathrm{M}}{5} e^{\sqrt{6 t}}+\frac{2 \mathrm{M}}{5} e^{-\sqrt{6} t}
$$

Similarly, $X_2$ can be found by $D_2$ / $D$: 

$$
X_2(s)=D_2 / D=\frac{-2 \mathrm{M} s}{s^4-7 s^2+6}=\frac{-2 \mathrm{M} s}{\left(s^2-1\right)\left(s^2-6\right)}=\frac{-2 \mathrm{M} s}{(s-1)(s+1)(s-\sqrt{6})(s+\sqrt{6})}=RHS
$$

Consider partial fraction: $\frac{A}{s-1}+\frac{B}{s+1}+\frac{C}{s-\sqrt{6}}+\frac{D}{s+\sqrt{6}}=LHS$

For the numerators (same calculation as above):

$$
\begin{aligned}
LHS&=A(s+1)\left(s^2-6\right)+B(s-1)\left(s^2-6\right)+C(s+\sqrt{6})\left(s^2-1\right)+D(s-\sqrt{6})\left(s^2-1\right) \\
&=-2 \mathrm{M} s=RHS
\end{aligned}
$$

Trying with $s=1$ :

$$
A(2)(-5)=-2 \mathrm{M} \text {; so } A=\frac{\mathrm{M}}{5} 
$$

Trying with $s=-1$ :

$$
B(-2)(-5)=2 \mathrm{M} \text {; so } B=\frac{\mathrm{M}}{5} 
$$

Trying with $s=\sqrt{6}$ :

$$
C(2 \sqrt{6})(5)=-2 \sqrt{6} \mathrm{M} ; \text { so } C=-\frac{\mathrm{M}}{5} 
$$

Trying with $s=-\sqrt{6}$ :

$$
D(-2 \sqrt{6})(5)=2 \sqrt{6} \mathrm{M}; \text { so } D=-\frac{\mathrm{M}}{5}
$$

So we can write $X_2$ in the partial fraction form:

$$
X_2(s)=\frac{\mathrm{M} / 5}{s-1}+\frac{\mathrm{M} / 5}{s+1}-\frac{\mathrm{M} / 5}{s-\sqrt{6}}-\frac{\mathrm{M} / 5}{s+\sqrt{6}}
$$

Take inverse Laplace transform:

$$
x_2(t)=\frac{\mathrm{M}}{5} e^t+\frac{\mathrm{M}}{5} e^{-t}-\frac{\mathrm{M}}{5} e^{\sqrt{6} t}-\frac{\mathrm{M}}{5} e^{-\sqrt{6} t}
$$

:::
