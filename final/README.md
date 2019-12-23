# Money Manager


### 主題簡介
這是一個**記帳**的網站，使用者可以記錄收入與支出的**類別**、**金額**與**日期**，並檢視兩者分別的**總額**、**百分比例**以及**淨收入**。

### 使用方法
- 按下 **Get Started!** 按鈕即可開始記帳
    - 選擇 Category
    - 輸入金額
    - 選擇日期
- 按下 **User Settings** 按鈕即可進行使用者設定
    - 輸入 **Username** 即可將頁面上方的 **My Money Manager** 改為 **Username's Money Manager**
    - 反覆按下 **Click to change the theme!** 按鈕即可改變頁面的顏色!
- 按下 **Help** 按鈕即可知道如何使用此網站

### 使用的技術
- 使用Google Fonts中的字型

        body {
                font-family: 'Comfortaa', cursive;
                font-size: 30px;
            }
        
- 使用Font Awesome中的icon
    - **Get Started!**
    
            <i class="fab fa-font-awesome-flag"></i>
        
    - **User Settings**
    
            <i class="fas fa-cog"></i>
        
    - **Help** 
    
            <i class="far fa-question-circle "></i>
        
- 使用Bootstrap中的 **Jumbotron**
- 使用Bootstrap中的 **Modal** 
    - **Get Started!**
    - **User Settings**
    - **Help**
    - **View Details**
- 使用Bootstrap中的 **Input group**
    - Get Started中的各個欄位    
    - User Settings中的欄位
- 使用Bootstrap中的 **Card**
    - **Total Expenses**
    - **Total Income**
    - **Balance:**
- 使用Bootstrap中的 **Alerts**
    - Total Expenses中**View Details**的分類
    - Total Income中**View Details**的分類
- 使用Bootstrap中的 **Progress** 呈現Total Expenses和Total Income的比例
- 使用jQuery
    - 輸入並將Username加入My Money Manager
    - 按下按鈕改變網頁顏色
    - 輸入並將收入和支出按類別加入Details中
    - 輸入並計算Total Expenses、Total Income、Balance、expenses和income的比例
    - 將expenses和income的百分比例設定為progress的長度

### 網站特色
- 使用**Modal**呈現部分內容使網頁精簡且功能分類清楚!
- 使用**Progress**呈現Total Expenses和Total Income的比例，清楚易懂!
- 使用顏色交錯的**Alerts**呈現收入和支出，使詳細資訊的類別一目瞭然!
- **User Settings**中可以改變使用者名稱和網頁主題(顏色)，讓記帳本更加個人化!
- **Help**幫助使用者更快速了解如何使用此網站!




