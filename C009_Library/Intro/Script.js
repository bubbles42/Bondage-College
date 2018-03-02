// Chapter 9 - Library Load
function C009_Library_Intro_Load() {

	// Time is always 14:25 on the intro, no timer, if time was already higher, we keep it
	if (CurrentTime < 14.25 * 60 * 60 * 1000) CurrentTime = 14.25 * 60 * 60 * 1000;
	StopTimer(CurrentTime);
	
}

// Chapter 9 - Library Run
function C009_Library_Intro_Run() {
	
	// Paints the background
	var ctx = document.getElementById("MainCanvas").getContext("2d");
	DrawImage(ctx, CurrentChapter + "/" + CurrentScreen + "/Background.jpg", 0, 0);
	DrawPlayerTransition(ctx);

	// Write the chapter introduction
	DrawText(ctx, GetText("Intro1"), 450, 100, "White");
	if (TextPhase >= 1) DrawText(ctx, GetText("Intro2"), 450, 200, "White");
	if (TextPhase >= 2) DrawText(ctx, GetText("Intro3"), 450, 300, "White");
	if (TextPhase >= 3) DrawText(ctx, GetText("Intro4"), 450, 400, "White");
	if (TextPhase >= 4) DrawText(ctx, GetText("Intro5"), 450, 500, "White");

}

// Chapter 9 - Library Click
function C009_Library_Intro_Click() {
	TextPhase++;
	if (TextPhase >= 5) SetScene(CurrentChapter, "LibraryMain");
}