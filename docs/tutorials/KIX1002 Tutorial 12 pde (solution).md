Case $1, \lambda=0$

| $\boldsymbol{Y}^{\prime \prime}=\mathbf{0}$ | $X^{\prime \prime}=\mathbf{0}$ |
| :---: | :---: |
| Let $Y(x)=e^{r y}$ | Let $X(x)=e^{r x}$ |
| Characteristic equation: $r^{2}=0$ | Characteristic equation: $r^{2}=0$ |
| $Y(y)=c_{1} e^{0 y}+c_{2} y e^{0 y}$ | $X(x)=c_{3} e^{0 x}+c_{4} x e^{0 x}$ |
| $\therefore Y(y)=c_{1}+c_{2} y$ | $\therefore X(x)=c_{3}+c_{4} x$ |
| $\therefore u_{1}=X_{1}(x) Y_{1}(y)=\left(c_{1}+c_{2} y\right)\left(c_{3}+c_{4} x\right)$ |  |

Case $2, \lambda=-\alpha^{2}, \alpha>0$

| $\boldsymbol{Y}^{\prime \prime}+\boldsymbol{\alpha}^{2} \boldsymbol{Y}=\mathbf{0}$ | $\boldsymbol{X}^{\prime \prime}-\boldsymbol{\alpha}^{2} \boldsymbol{X}=\mathbf{0}$ |
| :--- | :--- |
| Let $Y(y)=e^{r y}$ | Let $X(x)=e^{r x}$ |
| Characteristic equation: $r^{2}+\alpha^{2}=0$ | Characteristic equation: $r^{2}-\alpha^{2}=0$ |
| $r= \pm \sqrt{-\alpha^{2}}$ | $r= \pm \sqrt{\alpha^{2}}$ |
| $r=+\alpha i,-\alpha i$ | $r=+\alpha,-\alpha$ |
| $\therefore Y(y)=c_{5} \cos (\alpha y)+c_{6} \sin (\alpha y)$ | $\therefore X(x)=c_{7} \cosh (\alpha x)+c_{8} \sinh (\alpha x)$ |
| $\therefore u_{2}=X_{2}(x) Y_{2}(y)=\left(c_{5} \cos (\alpha y)+c_{6} \sin (\alpha y)\right)\left(c_{7} \cosh (\alpha x)+c_{8} \sinh (\alpha x)\right)$ |  |

Case $3, \lambda=+\alpha^{2}, \alpha>0$

$$
Y^{\prime \prime}-\alpha^{2} Y=0 \quad X^{\prime \prime}+\alpha^{2} X=0
$$

Let $Y(y)=e^{r y}$

Characteristic equation: $r^{2}-\alpha^{2}=0$

$$
r= \pm \sqrt{\alpha^{2}}
$$

$$
\begin{gathered}
r=+\alpha,-\alpha \\
\therefore Y(y)=c_{9} \cosh (\alpha y)+c_{10} \sinh (\alpha y)
\end{gathered}
$$

Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}+\alpha^{2}=0$

$r= \pm \sqrt{-\alpha^{2}}$

$r=+\alpha i,-\alpha i$

$\therefore X(x)=c_{11} \cos (\alpha x)+c_{12} \sin (\alpha x)$

$\therefore u_{3}=X_{3}(x) Y_{3}(y)=\left(c_{9} \cosh (\alpha y)+c_{10} \sinh (\alpha y)\right)\left(c_{11} \cos (\alpha x)+c_{12} \sin (\alpha x)\right)$

$\therefore$ General solution: $u(x, y)=u_{1}+u_{2}+u_{3}$

$=\left(c_{1}+c_{2} y\right)\left(c_{3}+c_{4} x\right)+\left(c_{5} \cos (\alpha y)+c_{6} \sin (\alpha y)\right)\left(c_{7} \cosh (\alpha x)+c_{8} \sinh (\alpha x)\right)$

$+\left(c_{9} \cosh (\alpha y)+c_{10} \sinh (\alpha y)\right)\left(c_{11} \cos (\alpha x)+c_{12} \sin (\alpha x)\right)$

2) $u_{t}-u_{x x}=0$

## Answer:

$\mathrm{A}=1, \mathrm{~B}=0, \mathrm{C}=0, B^{2}-4 A C=0-4(1)(0)=0$, Parabolic PDE

Step 1: Let $u(x, t)=X(x) T(t)$

$\frac{\partial u}{\partial t}-\frac{\partial^{2} u}{\partial x^{2}}=0$

$X T^{\prime}-X^{\prime \prime} T=0$

Step 2: Obtain 2 ODE equations

$\frac{X^{\prime \prime}}{X}=\frac{T^{\prime}}{T}=-\lambda$

$T^{\prime}+\lambda T=0 ; \quad X^{\prime \prime}+\lambda X=0$

## Step 3: 3 cases

Case $1, \lambda=0$

| $\boldsymbol{T}^{\prime}=\mathbf{0}$ | $\boldsymbol{X}^{\prime \prime}=\mathbf{0}$ |
| :---: | :---: |
| Let $T(t)=e^{r t}$ | Let $X(x)=e^{r x}$ |
| Characteristic equation: $r=0$ | Characteristic equation: $r^{2}=0$ |
| $\therefore T(t)=c_{1} e^{0 t}=c_{1}$ | $X(x)=c_{2} e^{0 x}+c_{3} x e^{0 x}$ |
|  | $\therefore X(x)=c_{2}+c_{3} x$ |

$\therefore u_{1}=X_{1}(x) T_{1}(t)=\left(c_{2}+c_{3} x\right)\left(c_{1}\right)=A_{1} x+B_{1}$ where $A_{1}, B_{1}=$ constant

Case $2, \lambda=-\alpha^{2}, \alpha>0$

$$
T^{\prime}-\alpha^{2} T=0 \quad X^{\prime \prime}-\alpha^{2} X=0
$$

Let $T(t)=e^{r t}$

Characteristic equation: $r-\alpha^{2}=0$

$$
\begin{aligned}
& r=\alpha^{2} \\
& \therefore T(t)=c_{4} e^{\alpha^{2} t}
\end{aligned}
$$

Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}-\alpha^{2}=0$

$$
\begin{aligned}
& r= \pm \sqrt{\alpha^{2}} \\
& r=+\alpha,-\alpha \\
& \therefore X(x)=c_{5} \cosh (\alpha x)+c_{6} \sinh (\alpha x)
\end{aligned}
$$

$\therefore u_{2}=X_{2}(x) T_{2}(t)=e^{\alpha^{2} t}\left(A_{2} \cosh (\alpha x)+B_{2} \sinh (\alpha x)\right)$ where $A_{2}, B_{2}=$ constant

Case $3, \lambda=+\alpha^{2}, \alpha>0$

$$
\begin{array}{c|c}
T^{\prime}+\alpha^{2} T=0 & X^{\prime \prime}+\alpha^{2} X=0
\end{array}
$$

Let $T(t)=e^{r t}$

Characteristic equation: $r+\alpha^{2}=0$

$$
\begin{aligned}
& r=-\alpha^{2} \\
& \therefore T(t)=c_{7} e^{-\alpha^{2} t}
\end{aligned}
$$

Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}+\alpha^{2}=0$

$$
\begin{aligned}
& r= \pm \sqrt{-\alpha^{2}} \\
& r=+\alpha i,-\alpha i \\
& \therefore X(x)=c_{8} \cos (\alpha x)+c_{9} \sin (\alpha x)
\end{aligned}
$$

$\therefore u_{3}=X_{3}(x) T_{3}(t)=e^{-\alpha^{2} t}\left(A_{3} \cos (\alpha x)+B_{3} \sin (\alpha x)\right)$ where $A_{3}, B_{3}=$ constant

$\therefore$ General solution: $u(x, t)=u_{1}+u_{2}+u_{3}$

$=A_{1} x+B_{1}+e^{\alpha^{2} t}\left(A_{2} \cosh (\alpha x)+B_{2} \sinh (\alpha x)\right)+e^{-\alpha^{2} t}\left(A_{3} \cos (\alpha x)+B_{3} \sin (\alpha x)\right)$

4) $u_{t}-\frac{1}{16} u_{x x}=0$

Answer:

$\mathrm{A}=-\frac{1}{16}, \mathrm{~B}=0, \mathrm{C}=0, B^{2}-4 A C=0-4\left(-\frac{1}{16}\right)(0)=0$, Parabolic PDE

Step 1: Let $u(x, t)=X(x) T(t)$

$\frac{\partial u}{\partial t}-\frac{\partial^{2} u}{16 \partial x^{2}}=0$

$X T^{\prime}-\frac{1}{16} X^{\prime \prime} T=0$

Step 2: Obtain 2 ODE equations

$$
\begin{aligned}
& \frac{X^{\prime \prime}}{16 X}=\frac{T^{\prime}}{T}=-\lambda \\
& T^{\prime}+\lambda T=0 ; \quad X^{\prime \prime}+16 \lambda X=0
\end{aligned}
$$

Step 3: 3 cases

Case $1, \lambda=0$

| $T^{\prime}=\mathbf{0}$ | $X^{\prime \prime}=\mathbf{0}$ |
| :---: | :---: |
| Let $T(t)=e^{r t}$ | Let $X(x)=e^{r x}$ |
| Characteristic equation: $r=0$ | Characteristic equation: $r^{2}=0$ |
| $\therefore T(t)=c_{1} e^{0 t}=c_{1}$ | $X(x)=c_{2} e^{0 x}+c_{3} x e^{0 x}$ |
|  | $\therefore X(x)=c_{2}+c_{3} x$ |

$$
\therefore u_{1}=X_{1}(x) T_{1}(t)=\left(c_{2}+c_{3} x\right)\left(c_{1}\right)=A_{1} x+B_{1} \text { where } A_{1}, B_{1}=\text { constant }
$$

Case $2, \lambda=-\alpha^{2}, \alpha>0$

$$
\begin{array}{l|l}
T^{\prime}-\alpha^{2} T=0 & X^{\prime \prime}-16 \alpha^{2} X=0
\end{array}
$$

Let $T(t)=e^{r t}$

Characteristic equation: $r-\alpha^{2}=0$ $r=\alpha^{2}$ $\therefore T(t)=c_{4} e^{\alpha^{2} t}$

$$
\text { Let } X(x)=e^{r x}
$$

Characteristic equation: $r^{2}-16 \alpha^{2}$

$$
=0
$$

$r= \pm \sqrt{16 \alpha^{2}}$

$r=+4 \alpha,-4 \alpha$

$\therefore X(x)=c_{5} \cosh (4 \alpha x)$

$+c_{6} \sinh (4 \alpha x)$

$\therefore u_{2}=X_{2}(x) T_{2}(t)=e^{\alpha^{2} t}\left(A_{2} \cosh (4 \alpha x)+B_{2} \sinh (4 \alpha x)\right)$ where $A_{2}, B_{2}=$ constant

Case $3, \lambda=+\alpha^{2}, \alpha>0$

$$
\begin{array}{l|l}
T^{\prime}+\alpha^{2} T=0 & X^{\prime \prime}+16 \alpha^{2} X=0
\end{array}
$$

$$
\begin{aligned}
& \text { Let } T(t)=e^{r t} \\
& \text { Let } X(x)=e^{r x} \\
& \text { Characteristic equation: } r+\alpha^{2}=0 \\
& r=-\alpha^{2} \\
& \text { Characteristic equation: } r^{2}+16 \alpha^{2}=0 \\
& \therefore T(t)=c_{7} e^{-\alpha^{2} t} \\
& r= \pm \sqrt{-16 \alpha^{2}} \\
& r=+4 \alpha i,-4 \alpha i \\
& \therefore X(x)=c_{8} \cos (4 \alpha x)+c_{9} \sin (4 \alpha x) \\
& \therefore u_{3}=X_{3}(x) T_{3}(t)=e^{-\alpha^{2} t}\left(A_{3} \cos (4 \alpha x)+B_{3} \sin (4 \alpha x)\right) \text { where } A_{3}, B_{3}=\text { constant } \\
& \therefore \text { General solution: } u(x, t)=u_{1}+u_{2}+u_{3} \\
& =A_{1} x+B_{1}+e^{\alpha^{2} t}\left(A_{2} \cosh (4 \alpha x)+B_{2} \sinh (4 \alpha x)\right)+e^{-\alpha^{2} t}\left(A_{3} \cos (4 \alpha x)+B_{3} \sin (4 \alpha x)\right)
\end{aligned}
$$

## Answer:

$\mathrm{A}=-1, \mathrm{~B}=0, \mathrm{C}=1, B^{2}-4 A C=0-4(-1)(1)>0$, Hyperbolic PDE

Step 1: Let $u(x, t)=X(x) T(t)$

$\frac{\partial^{2} u}{\partial t^{2}}-\frac{\partial^{2} u}{\partial x^{2}}=0$

$X T^{\prime \prime}-X^{\prime \prime} T=0$

Step 2: Obtain 2 ODE equations

$$
\begin{aligned}
& \frac{X^{\prime \prime}}{X}=\frac{T^{\prime \prime}}{T}=-\lambda \\
& T^{\prime \prime}+\lambda T=0 ; \quad X^{\prime \prime}+\lambda X=0
\end{aligned}
$$

## Step 3: 3 cases

## Case $1, \lambda=0$

$$
\boldsymbol{T}^{\prime \prime}=\mathbf{0}
$$

$$
X^{\prime \prime}=\mathbf{0}
$$

Let $T(t)=e^{r t}$

Characteristic equation: $r^{2}=0$

$T(t)=c_{1} e^{0 t}+c_{2} t e^{0 t}$

$\therefore T(t)=c_{1}+c_{2} t$
Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}=0$

$X(x)=c_{3} e^{0 x}+c_{4} x e^{0 x}$

$\therefore X(x)=c_{3}+c_{4} x$

$$
\therefore u_{1}=X_{1}(x) T_{1}(t)=\left(c_{1}+c_{2} t\right)\left(c_{3}+c_{4} x\right)
$$

Case $2, \lambda=-\alpha^{2}, \alpha>0$

$$
\boldsymbol{T}^{\prime \prime}-\alpha^{2} \boldsymbol{T}=\mathbf{0}
$$

$$
X^{\prime \prime}-\alpha^{2} X=0
$$

Let $T(t)=e^{r t}$

Characteristic equation: $r^{2}-\alpha^{2}=0$

$r= \pm \sqrt{\alpha^{2}}$

$r=+\alpha,-\alpha$

$\therefore T(t)=c_{5} \cosh (\alpha t)+c_{6} \sinh (\alpha t)$
Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}-\alpha^{2}=0$

$$
r= \pm \sqrt{\alpha^{2}}
$$

$r=+\alpha,-\alpha$

$\therefore X(x)=c_{7} \cosh (\alpha x)+c_{8} \sinh (\alpha x)$

$\therefore u_{2}=X_{2}(x) T_{2}(t)=\left(c_{5} \cosh (\alpha t)+c_{6} \sinh (\alpha t)\right)\left(c_{7} \cosh (\alpha x)+c_{8} \sinh (\alpha x)\right)$

Case $3, \lambda=+\alpha^{2}, \alpha>0$

## $T^{\prime}+\alpha^{2} T=0$

Let $T(t)=e^{r t}$

Characteristic equation: $r+\alpha^{2}=0$

$r= \pm \sqrt{-\alpha^{2}}$

$r=+\alpha i,-\alpha i$

$\therefore T(t)=c_{9} \cos (\alpha t)+c_{10} \sin (\alpha t)$

## $X^{\prime \prime}+\alpha^{2} X=0$

Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}+\alpha^{2}=0$

$r= \pm \sqrt{-\alpha^{2}}$

$r=+\alpha i,-\alpha i$

$\therefore X(x)=c_{11} \cos (\alpha x)+c_{12} \sin (\alpha x)$

$\therefore u_{3}=X_{3}(x) T_{3}(t)=\left(c_{9} \cos (\alpha t)+c_{10} \sin (\alpha t)\right)\left(c_{11} \cos (\alpha x)+c_{12} \sin (\alpha x)\right)$

$\therefore$ General solution: $u(x, t)=u_{1}+u_{2}+u_{3}$

$=\left(c_{1}+c_{2} t\right)\left(c_{3}+c_{4} x\right)+\left(c_{5} \cosh (\alpha t)+c_{6} \sinh (\alpha t)\right)\left(c_{7} \cosh (\alpha x)+c_{8} \sinh (\alpha x)\right)$ $+\left(c_{9} \cos (\alpha t)+c_{10} \sin (\alpha t)\right)\left(c_{11} \cos (\alpha x)+c_{12} \sin (\alpha x)\right)$

6) $u_{x x}=3 u_{y y}$

## Answer:

$\mathrm{A}=1, \mathrm{~B}=0, \mathrm{C}=3, B^{2}-4 A C=0-4(1)(3)<0$, Elliptic PDE

Step 1: Let $u(x, y)=X(x) Y(y)$

$\frac{\partial^{2} u}{\partial x^{2}}+3 \frac{\partial^{2} u}{\partial y^{2}}=0$

$X^{\prime \prime} Y+3 X Y^{\prime \prime}=0$

Step 2: Obtain 2 ODE equations

$$
\begin{aligned}
& \frac{X^{\prime \prime}}{3 X}=-\frac{Y^{\prime \prime}}{Y}=-\lambda \\
& X^{\prime \prime}+3 \lambda X=0 ; \quad Y^{\prime \prime}-\lambda Y=0
\end{aligned}
$$

Step 3: 3 cases

Case $1, \lambda=0$

| $Y^{\prime \prime}=\mathbf{0}$ | $\boldsymbol{X}^{\prime \prime}=\mathbf{0}$ |
| :---: | :---: |
| Let $Y(x)=e^{r y}$ | Let $X(x)=e^{r x}$ |
| Characteristic equation: $r^{2}=0$ | Characteristic equation: $r^{2}=0$ |
| $Y(y)=c_{1} e^{0 y}+c_{2} y e^{0 y}$ | $X(x)=c_{3} e^{0 x}+c_{4} x e^{0 x}$ |
| $\therefore Y(y)=c_{1}+c_{2} y$ | $\therefore X(x)=c_{3}+c_{4} x$ |
| $\quad \therefore u_{1}=X_{1}(x) Y_{1}(y)=\left(c_{1}+c_{2} y\right)\left(c_{3}+c_{4} x\right)$ |  |

Case $2, \lambda=-\alpha^{2}, \alpha>0$

$$
\begin{array}{l|l}
\boldsymbol{Y}^{\prime \prime}+\alpha^{2} Y=0 & X^{\prime \prime}-3 \alpha^{2} X=0
\end{array}
$$

Let $Y(y)=e^{r y}$

Characteristic equation: $r^{2}+\alpha^{2}=0$

$r= \pm \sqrt{-\alpha^{2}}$

$r=+\alpha i,-\alpha i$

$\therefore: Y(y)=c_{5} \cos (\alpha y)+c_{6} \sin (\alpha y)$
Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}-3 \alpha^{2}=0$

$r= \pm \sqrt{3 \alpha^{2}}$

$r=+\sqrt{3} \alpha,-\sqrt{3} \alpha$

$\therefore X(x)=c_{7} \cosh (\sqrt{3} \alpha x)+c_{8} \sinh (\sqrt{3} \alpha x)$

$\therefore u_{2}=X_{2}(x) Y_{2}(y)=\left(c_{5} \cos (\alpha y)+c_{6} \sin (\alpha y)\right)\left(c_{7} \cosh (\sqrt{3} \alpha x)+c_{8} \sinh (\sqrt{3} \alpha x)\right)$

Case $3, \lambda=+\alpha^{2}, \alpha>0$

$$
\begin{array}{l|l}
Y^{\prime \prime}-\alpha^{2} Y=0 & X^{\prime \prime}+3 \alpha^{2} X=0
\end{array}
$$

Let $Y(y)=e^{r y}$

Characteristic equation: $r^{2}-\alpha^{2}=0$

$$
r= \pm \sqrt{\alpha^{2}}
$$

$$
\begin{gathered}
r=+\alpha,-\alpha \\
\therefore Y(y)=c_{9} \cosh (\alpha y)+c_{10} \sinh (\alpha y)
\end{gathered}
$$

Let $X(x)=e^{r x}$

Characteristic equation: $r^{2}+\alpha^{2}=0$

$r= \pm \sqrt{-3 \alpha^{2}}$

$r=+\sqrt{3} \alpha i,-\sqrt{3} \alpha i$

$\therefore X(x)=c_{11} \cos (\sqrt{3} \alpha x)+c_{12} \sin (\sqrt{3} \alpha x)$

$\therefore u_{3}=X_{3}(x) Y_{3}(y)=\left(c_{9} \cosh (\alpha y)+c_{10} \sinh (\alpha y)\right)\left(c_{11} \cos (\sqrt{3} \alpha x)+c_{12} \sin (\sqrt{3} \alpha x)\right)$

$\therefore$ General solution: $u(x, y)=u_{1}+u_{2}+u_{3}$

$=\left(c_{1}+c_{2} y\right)\left(c_{3}+c_{4} x\right)+\left(c_{5} \cos (\alpha y)+c_{6} \sin (\alpha y)\right)\left(c_{7} \cosh (\sqrt{3} \alpha x)+c_{8} \sinh (\sqrt{3} \alpha x)\right)$

$+\left(c_{9} \cosh (\alpha y)+c_{10} \sinh (\alpha y)\right)\left(c_{11} \cos (\sqrt{3} \alpha x)+c_{12} \sin (\sqrt{3} \alpha x)\right)$

7) $u_{t t}=4 a^{2} u_{x x}$

## Answer:

$$
\begin{gathered}
\mathrm{A}=4 a^{2}, \mathrm{~B}=0, \mathrm{C}=-1, B^{2}-4 A C=0-4\left(4 a^{2}\right)(-1)>0, \\
\text { Hyperbolic PDE }
\end{gathered}
$$

Step 1: Let $u(x, t)=X(x) T(t)$

$\frac{\partial^{2} u}{\partial t^{2}}-4 a^{2} \frac{\partial^{2} u}{\partial x^{2}}=0$

$X T^{\prime \prime}-4 a^{2} X^{\prime \prime} T=0$

Step 2: Obtain 2 ODE equations

$$
\begin{aligned}
& \frac{X^{\prime \prime}}{4 a^{2} X}=\frac{T^{\prime \prime}}{T}=-\lambda \\
& T^{\prime \prime}+\lambda T=0 ; \quad X^{\prime \prime}+4 a^{2} \lambda X=0
\end{aligned}
$$

## Step 3: 3 cases

Case $1, \lambda=0$

| $T^{\prime \prime}=\mathbf{0}$ | $\boldsymbol{X}^{\prime \prime}=\mathbf{0}$ |
| :--- | :--- |
| Let $T(t)=e^{r t}$ | Let $X(x)=e^{r x}$ |
| Characteristic equation: $r^{2}=0$ | Characteristic equation: $r^{2}=0$ |
| $T(t)=c_{1} e^{0 t}+c_{2} t e^{0 t}$ | $X(x)=c_{3} e^{0 x}+c_{4} x e^{0 x}$ |
| $\therefore T(t)=c_{1}+c_{2} t$ | $\therefore X(x)=c_{3}+c_{4} x$ |
| $\quad \therefore u_{1}=X_{1}(x) T_{1}(t)=\left(c_{1}+c_{2} t\right)\left(c_{3}+c_{4} x\right)$ |  |

Case $2, \lambda=-\alpha^{2}, \alpha>0$

$$
\begin{array}{l|l}
T^{\prime \prime}-\alpha^{2} T=0 & X^{\prime \prime}-4 a^{2} \alpha^{2} X=0
\end{array}
$$

Let $T(t)=e^{r t}$

Characteristic equation: $r^{2}-\alpha^{2}=0$

$$
r= \pm \sqrt{\alpha^{2}}
$$

$$
\begin{aligned}
& r=+\alpha,-\alpha \\
& \therefore T(t)=c_{5} \cosh (\alpha t)+c_{6} \sinh (\alpha t)
\end{aligned}
$$

$$
\text { Let } X(x)=e^{r x}
$$

Characteristic equation:

$$
r^{2}-4 a^{2} \alpha^{2}=0
$$

$$
\begin{aligned}
& r= \pm \sqrt{4 a^{2} \alpha^{2}} \\
& r=+2 a \alpha,-2 a \alpha \\
& \therefore X(x)=c_{7} \cosh (2 a \alpha x)+c_{8} \sinh (2 a \alpha x)
\end{aligned}
$$

$\therefore u_{2}=X_{2}(x) T_{2}(t)=\left(c_{5} \cosh (\alpha t)+c_{6} \sinh (\alpha t)\right)\left(c_{7} \cosh (2 a \alpha x)+c_{8} \sinh (2 a \alpha x)\right)$

Case $3, \lambda=+\alpha^{2}, \alpha>0$

$$
T^{\prime}+\alpha^{2} T=\mathbf{0}
$$

$$
X^{\prime \prime}+4 a^{2} \alpha^{2} X=0
$$

$$
\begin{array}{ll}
\text { Let } T(t)=e^{r t} & \text { Let } X(x)=e^{r x} \\
\text { Characteristic equation: } r+\alpha^{2}=0 & \text { Characteristic equation: } \\
r= \pm \sqrt{-\alpha^{2}} & r^{2}+4 a^{2} \alpha^{2}=0 \\
r=+\alpha i,-\alpha i & r= \pm \sqrt{-4 a^{2} \alpha^{2}} \\
\therefore T(t)=c_{9} \cos (\alpha t)+c_{10} \sin (\alpha t) & r=+2 a \alpha i,-2 a \alpha i \\
& \therefore X(x)=c_{11} \cos (2 a \alpha x)+c_{12} \sin (2 a \alpha x) \\
\therefore u_{3}=X_{3}(x) T_{3}(t)=\left(c_{9} \cos (\alpha t)+c_{10} \sin (\alpha t)\right)\left(c_{11} \cos (2 a \alpha x)+c_{12} \sin (2 a \alpha x)\right) \\
& \therefore \text { General solution: } u(x, t)=u_{1}+u_{2}+u_{3} \\
=\left(c_{1}+c_{2} t\right)\left(c_{3}+c_{4} x\right)+\left(c_{5} \cos h(\alpha t)+c_{6} \sinh (\alpha t)\right)\left(c_{7} \cos h(2 a \alpha x)+c_{8} \sinh (2 a \alpha x)\right. \\
& +\left(c_{9} \cos (\alpha t)+c_{10} \sin (\alpha t)\right)\left(c_{11} \cos (2 a \alpha x)+c_{12} \sin (2 a \alpha x)\right)
\end{array}
$$

8) Set up the boundary and initial conditions from the given statement/figure that describe the scenario.

Consider a hot place of area ( $x y$ ), set up the boundary value problem for the steady-state temperature over the $x$ and $y$ location, i.e. $u(x, y)$.

![](https://cdn.mathpix.com/cropped/2024_05_25_33ac42d1ffc469dbc7deg-09.jpg?height=671&width=1293&top_left_y=1286&top_left_x=313)

## Answer:

$\frac{\partial^{2} u}{\partial x^{2}}+\frac{\partial^{2} u}{\partial y^{2}}=0$

$$
\text { for } 0<x<a, 0<y<b
$$

Boundary condition: $u(0, y)=0,\left.\frac{\partial u}{\partial x}\right|_{x=a}=0 \quad$ for $0<y<b$

$$
u(x, b)=x^{2},\left.\frac{\partial u}{\partial y}\right|_{y=0}=0 \quad \text { for } 0<x<a
$$

9) A metal rod coincides with the interval $[0, L]$ on the $x$-axis with both ends fixed at $0^{\circ} \mathrm{C}$. It has an initial temperature of $\cos \left(\frac{\pi}{L} x\right)$. Set up the boundary value problem for the temperature $u(x, t)$.

Answer:

$k \frac{\partial^{2} u}{\partial x^{2}}=\frac{\partial u}{\partial t}$

$$
\text { for } 0<x<L, \quad t>0
$$

Boundary condition: $u(0, t)=0, u(L, \mathrm{t})=0 \quad$ for $t>0$

Initial condition: $\quad u(x, 0)=\cos \left(\frac{\pi}{L} x\right) \quad$ for $0<x<L$

10) Set up the boundary value problem for the displacement $u(x, t)$ when a string with length, $L=1$, is fixed at the two ends on the $x$-axis with the initial shape shown as the graph below. The string is released from rest.

![](https://cdn.mathpix.com/cropped/2024_05_25_33ac42d1ffc469dbc7deg-10.jpg?height=343&width=805&top_left_y=1159&top_left_x=314)

Answer:

$a^{2} \frac{\partial^{2} u}{\partial x^{2}}=\frac{\partial^{2} u}{\partial t^{2}}$

for $0<x<1, \quad t>0$

Boundary condition: $u(0,0)=0, u(L, 0)=0$

Initial condition: $u(x, 0)=f(x)=\left\{\begin{array}{cl}x & \text { for } 0<x<1 / 4 \\ \frac{1}{2}-x & \text { for } 1 / 4<x<1 / 2 \\ 0 & \text { for } 1 / 2<x<1\end{array}\right.$

$u_{t}(x, 0)=0$

11) Match the given situations to their corresponding equations and conditions.

![](https://cdn.mathpix.com/cropped/2024_05_25_33ac42d1ffc469dbc7deg-11.jpg?height=1236&width=1464&top_left_y=384&top_left_x=296)

