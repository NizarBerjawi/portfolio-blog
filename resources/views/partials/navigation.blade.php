 <!-- Navigation -->
<a class="menu-toggle rounded" href="#">
  <i class="fas fa-bars"></i>
</a>
<nav id="sidebar-wrapper">
  <ul class="sidebar-nav">
    <li class="sidebar-brand">
      <a class="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
    </li>
    <li class="sidebar-nav-item">
      <a class="js-scroll-trigger" href="#page-top">Home</a>
    </li>
    <li class="sidebar-nav-item">
      <a class="js-scroll-trigger" href="#about">About</a>
    </li>
    <li class="sidebar-nav-item">
      <a class="js-scroll-trigger" href="#services">Services</a>
    </li>
    <li class="sidebar-nav-item">
      <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
    </li>
    <li class="sidebar-nav-item">
      <a class="js-scroll-trigger" href="#contact">Contact</a>
    </li>
    @guest
    <li class="sidebar-nav-item">
      <a class="js-scroll-trigger" href="{{ route('login') }}">{{ __('Login') }}</a>
    </li>
    @else
        <li class="sidebar-nav-item"
            onclick="event.preventDefault();
                         document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
        </li>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    @endif
  </ul>
</nav>
