class PagesController < ApplicationController
  def index
    @brother = %w{a b n c r t y u g d}.sample
    @time=Time.now
    @uptime=`uptime`
  end

end
