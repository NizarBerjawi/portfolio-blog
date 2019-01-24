<!-- Header -->
<header class="masthead d-flex">
  <div class="container text-center my-auto">
    <h1 class="mb-1">{{ array_get($section->content, 'masthead') }}</h1>
    <h3 class="mb-5">
      <em>{{ array_get($section->content, 'headline') }}</em>
    </h3>

    @if (!array_get($section->content, 'button.hidden'))
        <a class="btn {{ array_get($section->content, 'button.style') }} {{ array_get($section->content, 'button.size') }} js-scroll-trigger" href="#about">{{ array_get($section->content, 'button.label') }}</a>
    @endif
  </div>
  <div class="overlay"></div>
</header>
