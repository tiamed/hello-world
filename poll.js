$in = $(".insert_poll");
$rd = $("#radio");
$cb = $("#checkbox");
function json() {
	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.open("GET", path, false);
	xhr.send(null);
	var q = JSON.parse(xhr.responseText);
	if(q){
		window.q = q;
	}
	window.questions = q[0];
	window.options = q[1];
	addQuestion();
}






function addQuestion() {
	var text0 = '<div class="form-group row"><label class="control-label col-md-2">';
	var text1 = '</label><div class="col-md-4"><input type="text" id="title" name="title" autocomplete="off" class="form-control" required="required"></div></div>';
	var radio1 = '</label><div class="col-md-4" id="radio"></div></div>';
	var radio2 = '<input type="radio" value="1">';
	var checkbox1 = '</label><div class="col-md-4" id="checkbox"></div></div>';
	var checkbox2 = '<input type="checkbox" value="1">';
	var div0 = '</div></div>'
	// var ques = questions.find(quesId);
	questions.forEach(function(question) {
		var kind = question.kind;
		if (kind == "text") {
			$in.append(
				text0 + question.content + text1
				);
		} else if (kind == "radio") {
			$in.append(
				text0 + question.content + radio1
				);
			var qId = question.id;
			var option = [];
			option.push(options.find(function opt(ques) {
										return ques.quest_id == qId;
									}));
			option.forEach(function(op) {
				$rd.append(
					radio2 + op.content + '<br>'
					);
			});
		} else if (kind == "checkbox") {
			$in.append(
				text0 + question.content + checkbox1
				);
			var qId = question.id;
			var option = [];
			option.push(options.find(function opt(ques) {
										return ques.quest_id == qId;
									}));
			option.forEach(function(op) {
				$cb.append(
					radio2 + op.content + '<br>' + div0
					);
			});
		}
	})
}

