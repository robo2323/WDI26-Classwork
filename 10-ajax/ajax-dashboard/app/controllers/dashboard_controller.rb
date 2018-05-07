class DashboardController < ApplicationController


  def info
    info = params[:test]

    # number = %w[1 2 3 4 5 6 7 8 9 10].sample
    render json: { info: info }
      # render json: { number: number, time: Time.now, uptime: `uptime` }

  end


end
