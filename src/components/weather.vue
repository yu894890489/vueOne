<template>
	<section class="panel" style="margin-top: 20px;">
      <div class="weather-bg">
          <div class="panel-body">
              <div class="row">
                  <div class="col-xs-6">
                    <i class="icon-cloud"></i>
                      California
                  </div>
                  <div class="col-xs-6">
                      <div class="degree">
                          24°
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <footer class="weather-category">
          <ul>
              <li class="active">
                  <h5>humidity</h5>
                  56%
              </li>
              <li>
                  <h5>precip</h5>
                  1.50 in
              </li>
              <li>
                  <h5>winds</h5>
                  10 mph
              </li>
          </ul>
      </footer>
    </section>
</template>
<script>
	export default{
		name:'weather'
	}
</script>