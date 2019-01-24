<!-- About -->
<section class="content-section bg-light" id="about">
  <div class="container text-center">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h2>{{ array_get($section->content, 'header') }}</h2>
        <p class="lead mb-5">{{ array_get($section->content, 'headline') }}</p>
        @if (!array_get($section->content, 'button.hidden'))
            <a class="btn {{ array_get($section->content, 'button.style') }} {{ array_get($section->content, 'button.size') }} js-scroll-trigger" href="#services">{{ array_get($section->content, 'button.label') }}</a>
        @endif
      </div>
    </div>
  </div>
</section>
