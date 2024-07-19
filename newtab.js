// newtab.js
document.addEventListener('DOMContentLoaded', function() {

	// 現在の日付を取得
	const today = new Date();

	// 今年の1月1日を取得
	const startOfYear = new Date(today.getFullYear(), 0, 1);
	
	// 経過日数を計算
	const timeDiff = today - startOfYear;
	const daysSinceNewYear = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	
	// <p>タグに経過日数を書き込む
	const daysParagraph = document.getElementById('days-since-new-year');
	daysParagraph.textContent = `Days since January 1st: ${daysSinceNewYear}`;
  });
  