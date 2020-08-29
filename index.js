var breakPoint = bootstrapDetectBreakpoint();
function handleExplore() {
    document.getElementById("explore_group_path").setAttribute("style", "fill: #0054a4")
    document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
    document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
    document.getElementById("stage_number").innerHTML = 1;
    document.getElementById("explore_arrow_1").setAttribute("style", "fill: #f97352")
    document.getElementById("explore_arrow_2").setAttribute("style", "fill: #f97352")
    document.getElementById("expand_arrow_1").setAttribute("style", "fill: #f9735200")
    document.getElementById("expand_arrow_2").setAttribute("style", "fill: #f9735200")
    document.getElementById("develop_arrow_1").setAttribute("style", "fill: #f9735200")
    document.getElementById("develop_arrow_2").setAttribute("style", "fill: #f9735200")
    document.getElementById("explore_content_container").classList.replace('inactive', 'active')
    document.getElementById("develop_content_container").classList.replace('active', 'inactive')
    document.getElementById("expand_content_container").classList.replace('active', 'inactive')
    document.getElementById("1a").classList.replace("explore_inactive_triangle", "explore_active_triangle")
    document.getElementById("2a").classList.replace("explore_inactive_triangle", "explore_active_triangle")
    document.getElementById("3a").classList.replace("explore_inactive_triangle", "explore_active_triangle")
    document.getElementById("4a").classList.replace("develop_active_triangle", "develop_inactive_triangle")
    document.getElementById("5a").classList.replace("develop_active_triangle", "develop_inactive_triangle")
    document.getElementById("6a").classList.replace("develop_active_triangle", "develop_inactive_triangle")
    document.getElementById("7a").classList.replace("expand_active_triangle", "expand_inactive_triangle")
    document.getElementById("8a").classList.replace("expand_active_triangle", "expand_inactive_triangle")
    document.getElementById("9a").classList.replace("expand_active_triangle", "expand_inactive_triangle")
    document.getElementById("1b").classList.replace("explore_inactive_text", "explore_active_text")
    document.getElementById("2b").classList.replace("explore_inactive_text", "explore_active_text")
    document.getElementById("3b").classList.replace("explore_inactive_text", "explore_active_text")
    document.getElementById("4b").classList.replace("develop_active_text", "develop_inactive_text")
    document.getElementById("5b").classList.replace("develop_active_text", "develop_inactive_text")
    document.getElementById("6b").classList.replace("develop_active_text", "develop_inactive_text")
    document.getElementById("7b").classList.replace("expand_active_text", "expand_inactive_text")
    document.getElementById("8b").classList.replace("expand_active_text", "expand_inactive_text")
    document.getElementById("9b").classList.replace("expand_active_text", "expand_inactive_text")
}

function handleDevelop() {
    document.getElementById("explore_group_path").setAttribute("style", "fill: #393b3d")
    document.getElementById("develop_group_path").setAttribute("style", "fill: #0054a4")
    document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
    document.getElementById("stage_number").innerHTML = 2;
    document.getElementById("explore_arrow_1").setAttribute("style", "fill: #f9735200")
    document.getElementById("explore_arrow_2").setAttribute("style", "fill: #f9735200")
    document.getElementById("expand_arrow_1").setAttribute("style", "fill: #f9735200")
    document.getElementById("expand_arrow_2").setAttribute("style", "fill: #f9735200")
    document.getElementById("develop_arrow_1").setAttribute("style", "fill: #f97352")
    document.getElementById("develop_arrow_2").setAttribute("style", "fill: #f97352")
    document.getElementById("develop_content_container").classList.replace('inactive', 'active')
    document.getElementById("explore_content_container").classList.replace('active', 'inactive')
    document.getElementById("expand_content_container").classList.replace('active', 'inactive')
    document.getElementById("1a").classList.replace("explore_active_triangle", "explore_inactive_triangle")
    document.getElementById("2a").classList.replace("explore_active_triangle", "explore_inactive_triangle")
    document.getElementById("3a").classList.replace("explore_active_triangle", "explore_inactive_triangle")
    document.getElementById("4a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
    document.getElementById("5a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
    document.getElementById("6a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
    document.getElementById("7a").classList.replace("expand_active_triangle", "expand_inactive_triangle")
    document.getElementById("8a").classList.replace("expand_active_triangle", "expand_inactive_triangle")
    document.getElementById("9a").classList.replace("expand_active_triangle", "expand_inactive_triangle")
    document.getElementById("1b").classList.replace("explore_active_text", "explore_inactive_text")
    document.getElementById("2b").classList.replace("explore_active_text", "explore_inactive_text")
    document.getElementById("3b").classList.replace("explore_active_text", "explore_inactive_text")
    document.getElementById("4b").classList.replace("develop_inactive_text", "develop_active_text")
    document.getElementById("5b").classList.replace("develop_inactive_text", "develop_active_text")
    document.getElementById("6b").classList.replace("develop_inactive_text", "develop_active_text")
    document.getElementById("7b").classList.replace("expand_active_text", "expand_inactive_text")
    document.getElementById("8b").classList.replace("expand_active_text", "expand_inactive_text")
    document.getElementById("9b").classList.replace("expand_active_text", "expand_inactive_text")
}

function handleExpand() {
    document.getElementById("explore_group_path").setAttribute("style", "fill: #393b3d")
    document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
    document.getElementById("expand_group_path").setAttribute("style", "fill: #0054a4")
    document.getElementById("stage_number").innerHTML = 3;
    document.getElementById("explore_arrow_1").setAttribute("style", "fill: #f9735200")
    document.getElementById("explore_arrow_2").setAttribute("style", "fill: #f9735200")
    document.getElementById("expand_arrow_1").setAttribute("style", "fill: #f97352")
    document.getElementById("expand_arrow_2").setAttribute("style", "fill: #f97352")
    document.getElementById("develop_arrow_1").setAttribute("style", "fill: #f9735200")
    document.getElementById("develop_arrow_2").setAttribute("style", "fill: #f9735200")
    document.getElementById("expand_content_container").classList.replace('inactive', 'active')
    document.getElementById("develop_content_container").classList.replace('active', 'inactive')
    document.getElementById("explore_content_container").classList.replace('active', 'inactive')
    document.getElementById("1a").classList.replace("explore_active_triangle", "explore_inactive_triangle")
    document.getElementById("2a").classList.replace("explore_active_triangle", "explore_inactive_triangle")
    document.getElementById("3a").classList.replace("explore_active_triangle", "explore_inactive_triangle")
    document.getElementById("4a").classList.replace("develop_active_triangle", "develop_inactive_triangle")
    document.getElementById("5a").classList.replace("develop_active_triangle", "develop_inactive_triangle")
    document.getElementById("6a").classList.replace("develop_active_triangle", "develop_inactive_triangle")
    document.getElementById("7a").classList.replace("expand_inactive_triangle", "expand_active_triangle")
    document.getElementById("8a").classList.replace("expand_inactive_triangle", "expand_active_triangle")
    document.getElementById("9a").classList.replace("expand_inactive_triangle", "expand_active_triangle")
    document.getElementById("1b").classList.replace("explore_active_text", "explore_inactive_text")
    document.getElementById("2b").classList.replace("explore_active_text", "explore_inactive_text")
    document.getElementById("3b").classList.replace("explore_active_text", "explore_inactive_text")
    document.getElementById("4b").classList.replace("develop_active_text", "develop_inactive_text")
    document.getElementById("5b").classList.replace("develop_active_text", "develop_inactive_text")
    document.getElementById("6b").classList.replace("develop_active_text", "develop_inactive_text")
    document.getElementById("7b").classList.replace("expand_inactive_text", "expand_active_text")
    document.getElementById("8b").classList.replace("expand_inactive_text", "expand_active_text")
    document.getElementById("9b").classList.replace("expand_inactive_text", "expand_active_text")
}

function handleResize() {
    if (breakPoint.name === 'sm' || breakPoint.name === 'xs') {
        document.getElementById("stage_number").innerHTML = 1;
        document.getElementById("develop_content_container").classList.replace('inactive', 'active')
        document.getElementById("4a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
        document.getElementById("5a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
        document.getElementById("6a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
        document.getElementById("explore_arrow_1").setAttribute("style", "fill: #f9735200")
        document.getElementById("explore_arrow_2").setAttribute("style", "fill: #f9735200")
        document.getElementById("expand_arrow_1").setAttribute("style", "fill: #f9735200")
        document.getElementById("expand_arrow_2").setAttribute("style", "fill: #f9735200")
        document.getElementById("develop_arrow_1").setAttribute("style", "fill: #f97352")
        document.getElementById("develop_arrow_2").setAttribute("style", "fill: #f97352")
        document.getElementById("4b").classList.replace("develop_active_text", "develop_inactive_text")
        document.getElementById("5b").classList.replace("develop_active_text", "develop_inactive_text")
        document.getElementById("6b").classList.replace("develop_active_text", "develop_inactive_text")
        document.getElementById('4b').innerHTML = `Identify the most valuable business problem`;
        document.getElementById('5b').innerHTML = `Investigate the available data`;
        document.getElementById('6b').innerHTML = `Develop and demonstrate a Proof of Concept`;
        document.getElementById("explore_group_path").setAttribute("style", "fill: #0054a4")
        document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
        document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
        document.getElementById("explore_group").addEventListener("click", function () {
            document.getElementById("explore_group_path").setAttribute("style", "fill: #0054a4")
            document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("stage_number").innerHTML = 1;
            document.getElementById('4b').innerHTML = `Identify the most valuable business problem`;
            document.getElementById('5b').innerHTML = `Investigate the available data`;
            document.getElementById('6b').innerHTML = `Develop and demonstrate a Proof of Concept`;
        })
        document.getElementById('develop_group').addEventListener("click", function () {
            document.getElementById("explore_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("develop_group_path").setAttribute("style", "fill: #0054a4")
            document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("stage_number").innerHTML = 2;
            document.getElementById('4b').innerHTML = `Scope and establish a successful outcome`;
            document.getElementById('5b').innerHTML = `Train & test the AI model`;
            document.getElementById('6b').innerHTML = `Process a real data set and deliver the outcome`;
        })
        document.getElementById('expand_group').addEventListener("click", function () {
            document.getElementById("explore_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("expand_group_path").setAttribute("style", "fill: #0054a4")
            document.getElementById("stage_number").innerHTML = 3;
            document.getElementById('4b').innerHTML = `Integration with business operations`;
            document.getElementById('5b').innerHTML = `Model hosting`;
            document.getElementById('6b').innerHTML = `Ongoing monitoring and retraining`;
        })
    } else {
        document.getElementById('1b').innerHTML = `Identify the most valuable business problem`;
            document.getElementById('2b').innerHTML = `Investigate the available data`;
            document.getElementById('3b').innerHTML = `Develop and demonstrate a Proof of Concept`;
            document.getElementById('4b').innerHTML = `Scope and establish a successful outcome`;
            document.getElementById('5b').innerHTML = `Train & test the AI model`;
            document.getElementById('6b').innerHTML = `Process a real data set and deliver the outcome`;
            document.getElementById('7b').innerHTML = `Integration with business operations`;
            document.getElementById('8b').innerHTML = `Model hosting`;
            document.getElementById('9b').innerHTML = `Ongoing monitoring and retraining`;
            handleExplore();
        document.getElementById("explore_group").addEventListener("click", function () {
            handleExplore();
        })
        document.getElementById('develop_group').addEventListener("click", function () {
            handleDevelop();
        })
        document.getElementById('expand_group').addEventListener("click", function () {
            handleExpand();
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (breakPoint.name === 'sm' || breakPoint.name === 'xs') {
        document.getElementById("stage_number").innerHTML = 1;
        document.getElementById("develop_content_container").classList.replace('inactive', 'active')
        document.getElementById("4a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
        document.getElementById("5a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
        document.getElementById("6a").classList.replace("develop_inactive_triangle", "develop_active_triangle")
        document.getElementById("explore_arrow_1").setAttribute("style", "fill: #f9735200")
        document.getElementById("explore_arrow_2").setAttribute("style", "fill: #f9735200")
        document.getElementById("expand_arrow_1").setAttribute("style", "fill: #f9735200")
        document.getElementById("expand_arrow_2").setAttribute("style", "fill: #f9735200")
        document.getElementById("develop_arrow_1").setAttribute("style", "fill: #f97352")
        document.getElementById("develop_arrow_2").setAttribute("style", "fill: #f97352")
        document.getElementById("4b").classList.replace("develop_active_text", "develop_inactive_text")
        document.getElementById("5b").classList.replace("develop_active_text", "develop_inactive_text")
        document.getElementById("6b").classList.replace("develop_active_text", "develop_inactive_text")
        document.getElementById('4b').innerHTML = `Identify the most valuable business problem`;
        document.getElementById('5b').innerHTML = `Investigate the available data`;
        document.getElementById('6b').innerHTML = `Develop and demonstrate a Proof of Concept`;
        document.getElementById("explore_group_path").setAttribute("style", "fill: #0054a4")
        document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
        document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
        document.getElementById("explore_group").addEventListener("click", function () {
            document.getElementById("explore_group_path").setAttribute("style", "fill: #0054a4")
            document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("stage_number").innerHTML = 1;
            document.getElementById('4b').innerHTML = `Identify the most valuable business problem`;
            document.getElementById('5b').innerHTML = `Investigate the available data`;
            document.getElementById('6b').innerHTML = `Develop and demonstrate a Proof of Concept`;
        })
        document.getElementById('develop_group').addEventListener("click", function () {
            document.getElementById("explore_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("develop_group_path").setAttribute("style", "fill: #0054a4")
            document.getElementById("expand_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("stage_number").innerHTML = 2;
            document.getElementById('4b').innerHTML = `Scope and establish a successful outcome`;
            document.getElementById('5b').innerHTML = `Train & test the AI model`;
            document.getElementById('6b').innerHTML = `Process a real data set and deliver the outcome`;
        })
        document.getElementById('expand_group').addEventListener("click", function () {
            document.getElementById("explore_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("develop_group_path").setAttribute("style", "fill: #393b3d")
            document.getElementById("expand_group_path").setAttribute("style", "fill: #0054a4")
            document.getElementById("stage_number").innerHTML = 3;
            document.getElementById('4b').innerHTML = `Integration with business operations`;
            document.getElementById('5b').innerHTML = `Model hosting`;
            document.getElementById('6b').innerHTML = `Ongoing monitoring and retraining`;
        })
    } else {
        handleExplore();
        document.getElementById('1b').innerHTML = `Identify the most valuable business problem`;
            document.getElementById('2b').innerHTML = `Investigate the available data`;
            document.getElementById('3b').innerHTML = `Develop and demonstrate a Proof of Concept`;
            document.getElementById('4b').innerHTML = `Scope and establish a successful outcome`;
            document.getElementById('5b').innerHTML = `Train & test the AI model`;
            document.getElementById('6b').innerHTML = `Process a real data set and deliver the outcome`;
            document.getElementById('7b').innerHTML = `Integration with business operations`;
            document.getElementById('8b').innerHTML = `Model hosting`;
            document.getElementById('9b').innerHTML = `Ongoing monitoring and retraining`;
        document.getElementById("explore_group").addEventListener("click", function () {
            handleExplore();
        })
        document.getElementById('develop_group').addEventListener("click", function () {
            handleDevelop();
        })
        document.getElementById('expand_group').addEventListener("click", function () {
            handleExpand();
        })
    }
  });
