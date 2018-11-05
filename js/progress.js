
  var ProgressDialog;
  {
    let element = undefined;

    ProgressDialog = function(dlg) {
      this.element = $(dlg);
      this.setProgress(0);
    }

    ProgressDialog.prototype.show = function() {
      this.element.prop('aria-hidden', 'false');
      this.element.css('display', 'block');
      return this;
    }

    ProgressDialog.prototype.hide = function() {
      this.element.prop('aria-hidden', 'true');
      this.element.css('display', 'none');
      return this;
    }

    ProgressDialog.prototype.setProgress = function(percentage) {
      this.element.find('.progress-pc').html(percentage + '%');
      this.element.find('.time__circle').css('stroke-dasharray', percentage + 'px, 1000px')
      return this;
    }

    ProgressDialog.prototype.setMessage = function(message) {
      this.element.find('.progress-msg').html(message);
      return this;
    }

    ProgressDialog.prototype.setApplicationTitle = function(applicationTitle) {
      this.element.find('.application_title').html(applicationTitle);
      return this;
    }

    ProgressDialog.prototype.setActivityTitle = function(activityTitle) {
      this.element.find('.dialog__title').html(activityTitle);
      return this;
    }

    ProgressDialog.prototype.setButtonText = function(text) {
      this.element.find('.btn').html(text);
      return this;
    }

    // Only allows a single click event handler
    ProgressDialog.prototype.setButtonHandler = function(func) {
      this.element.find('.btn').off().click(func);
      return this;
    }

    ProgressDialog.prototype.success = function() {
      this.element.find('.time__circle, .progress-pc').removeClass('failed')
                                                      .addClass('success');
      return this;
    }

    ProgressDialog.prototype.failed = function() {
      this.element.find('.time__circle, .progress-pc').removeClass('success')
                                                      .addClass('failed');
      return this;
    }

    ProgressDialog.prototype.reset = function() {
      this.element.find('.time__circle, .progress-pc').removeClass('success failed');
      this.setProgress(0);
      this.setButtonText('Cancel');
      return this;
    }
  };
